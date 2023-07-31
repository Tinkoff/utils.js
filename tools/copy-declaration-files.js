const path = require('path');
const fsExtra = require('fs-extra');
const recursiveReadSync = require('recursive-readdir-sync');

Promise.all(
    recursiveReadSync(path.join(__dirname, '..', 'ts_temp'))
        .filter(fileName => fileName.endsWith('.d.ts'))
        .map(fileName =>
            fsExtra.copy(
                fileName,
                fileName.replace('ts_temp', 'build')
            )
        )
);
