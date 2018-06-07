/* eslint-disable import/no-commonjs, global-require */
const execa = require('execa');

const publish = (dir, npmTag) =>
    execa.shell(`npm publish  --access public ${dir} --tag ${npmTag}`);

module.exports = publish;
