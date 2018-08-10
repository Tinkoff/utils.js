/* eslint-disable import/no-commonjs, global-require, no-console */
const path = require('path');
const fsExtra = require('fs-extra');
const ora = require('ora');
const chalk = require('chalk');
const { promptVersion } = require('./prompt');
const build = require('./build');
const publish = require('./publish');

const pkgRoot = path.join(__dirname, '../');
const pkgBuildPath = path.join(pkgRoot, '/build');
const pkgJSONPath = path.join(pkgRoot, 'package.json');

const withSpinner = (promise, text) => {
    ora.promise(promise, {
        text
    });
    return promise;
};
const cleanBuildPath = () => fsExtra.remove(pkgBuildPath);
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

const copyTypesFiles = (pathRootDir, buildPath) =>
    Promise.all(
        ['array', 'function', 'object', 'is', 'promise', 'string', '.']
            .map(target =>
                fsExtra.copy(
                    path.join(pathRootDir, 'src', target, 'index.d.ts'),
                    path.join(buildPath, target, 'index.d.ts')
                )
            )
    );

const copyTypesFilesWithSpinner = () =>
    withSpinner(
        copyTypesFiles(pkgRoot, pkgBuildPath),
        'Copying index.d.ts files'
    );

const publishWithSpinner = npmTag =>
    withSpinner(
        publish(pkgBuildPath, npmTag),
        'Publishing package to npm registry'
    );

const buildWithSpinner = () =>
    withSpinner(build(pkgBuildPath), 'Compiling package');

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
        .then(copyRelationalFilesWithSpinner)
        .then(copyTypesFilesWithSpinner)
        .then(() => publishWithSpinner(npmTag))
        .then(cleanBuildPath)
        .then(() => console.log(chalk.blue('Package was published!')))
        .catch(err => {
            console.error(chalk.red(err));
            process.exit(1);
        });
};

release();
