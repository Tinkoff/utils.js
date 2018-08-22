/* eslint-disable import/no-commonjs, global-require */
const execa = require('execa');

const build = (buildDir, tsTemp) =>
    execa.shell(
        `tsc -p tsconfig.json`
    ).then(() => (
        execa.shell(
            `npx babel ./${tsTemp} -d ${buildDir}`
        )
    ));

module.exports = build;
