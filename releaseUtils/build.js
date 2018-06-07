/* eslint-disable import/no-commonjs, global-require */
const execa = require('execa');

const build = buildDir =>
    execa.shell(
        `npx babel --ignore __benchmarks__,__tests__ ./src -d ${buildDir}`
    );

module.exports = build;
