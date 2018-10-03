/* eslint-disable import/no-commonjs, global-require, no-console */
const path = require('path');
const fsExtra = require('fs-extra');
const ora = require('ora');
const chalk = require('chalk');
const { promptVersion } = require('./prompt');
const build = require('./build');
const publish = require('./publish');
const recursiveReadSync = require('recursive-readdir-sync');

const pkgRoot = path.join(__dirname, '../');
const buildDir = 'build';
const pkgBuildPath = path.join(pkgRoot, buildDir);
const pkgJSONPath = path.join(pkgRoot, 'package.json');
const tsTemp = JSON.parse(
    fsExtra.readFileSync(path.join(pkgRoot, 'tsconfig.json'))
).compilerOptions.outDir;

const withSpinner = (promise, text) => {
    ora.promise(promise, {
        text
    });
    return promise;
};
const cleanBuildPath = () => Promise.all([fsExtra.remove(pkgBuildPath), fsExtra.remove(tsTemp)]);
const updateVersionInPkg = version => {
    const prevPkgData = require(pkgJSONPath);

    return fsExtra.writeJson(
        pkgJSONPath,
        { ...prevPkgData, version },
        { spaces: 2 }
    );
};
const copyRelationalFiles = (pathRootDir, buildPath) =>
    Promise.all(
        ['package.json', '.npmignore', 'README.MD', 'LICENSE', 'CHANGELOG.md', '.babelrc'].map(fileName =>
            fsExtra.copy(
                path.join(pathRootDir, fileName),
                path.join(buildPath, fileName)
            )
        )
    );
const copyRelationalFilesWithSpinner = () =>
    withSpinner(
        copyRelationalFiles(pkgRoot, pkgBuildPath),
        'Copying package files'
    );

const copyDeclarationFiles = (pathRootDir, buildPath) =>
    Promise.all(
        recursiveReadSync(path.join(pkgRoot, tsTemp))
            .filter(fileName => fileName.endsWith(".d.ts"))
            .map(fileName =>
                fsExtra.copy(
                    fileName,
                    fileName.replace(tsTemp, buildDir)
                )
            )
    );
const copyDeclarationFilesWithSpinner = () =>
    withSpinner(
        copyDeclarationFiles(pkgRoot, pkgBuildPath),
        'Copying declaration files'
    );

const publishWithSpinner = npmTag =>
    withSpinner(
        publish(pkgBuildPath, npmTag),
        'Publishing package to npm registry'
    );

const buildWithSpinner = () =>
    withSpinner(build(pkgBuildPath, tsTemp), 'Compiling package');

const release = async () => {
    const { name: pkgName, version: currentVersion } = require(pkgJSONPath);

    const { npmTag, version: newVersion } = await promptVersion({
        pkgName,
        currentVersion
    });

    return Promise.resolve()
        .then(cleanBuildPath)
        .then(() => updateVersionInPkg(newVersion))
        .then(buildWithSpinner)
        .then(copyDeclarationFilesWithSpinner)
        .then(copyRelationalFilesWithSpinner)
        .then(() => publishWithSpinner(npmTag))
        .then(cleanBuildPath)
        .then(() => console.log(chalk.blue('Package was published!')))
        .catch(err => {
            console.error(chalk.red(err));
            process.exit(1);
        });
};

release();
