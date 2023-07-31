const path = require('path');
const fsExtra = require('fs-extra');
const recursiveReadSync = require('recursive-readdir-sync');

const ROOT_PATH = path.join(__dirname, '..')
const BUILD_PATH = path.join(ROOT_PATH, 'build')

const copyReleaseFiles = async () => {
    await Promise.all(
        recursiveReadSync(path.join(ROOT_PATH, 'ts_temp'))
            .filter(fileName => fileName.endsWith('.d.ts'))
            .map(fileName =>
                fsExtra.copy(
                    fileName,
                    fileName.replace('ts_temp', 'build')
                )
            )
    );

    await Promise.all(
        ['package.json', 'README.md', 'LICENSE', 'CHANGELOG.md'].map(fileName =>
            fsExtra.copy(
                path.join(ROOT_PATH, fileName),
                path.join(BUILD_PATH, fileName)
            )
        )
    );
}

copyReleaseFiles().then(() => {})
