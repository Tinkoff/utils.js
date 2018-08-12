/* eslint-disable import/no-commonjs, global-require */
const execa = require('execa');

const build = (buildDir, tsTemp) =>
    execa.shell(
        `tsc -p tsconfig.json`
    ).then(() => new Promise((resolve) => {
        execa.shell(
            `npx babel ./${tsTemp} -d ${buildDir}`
        ).then(resolve);
    }));

module.exports = build;
