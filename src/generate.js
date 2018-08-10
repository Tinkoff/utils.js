const fs = require('fs');
const path = require('path');

const getFiles = dir => fs.readdirSync(dir)
  .map(fileName => fileName.split('.'))
  .filter(arr => arr.length > 1)
  .map(arr => arr.shift());

const template = (fileName) => (
  `declare module '@tinkoff/utils/${__dirname}/${fileName}' {
    import { ${fileName} } from 'ramda';
    const _${fileName}: typeof ${fileName};
    export default _${fileName};
  }

`
);
const appendToResult = (acc, fileName) => acc += template(fileName);

const res = getFiles(__dirname).reduce(appendToResult, '');
fs.writeFileSync(path.join(__dirname, 'index.d.ts'), res, { encoding: 'utf8' });