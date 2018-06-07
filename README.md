# Tinkoff Utils
JavaScript utility library for simplifying work with data, functions, promises, etc.
The main goals of the library are modularity, functional style, performance, simplicity.

## Example
Install
```bash
$ npm i --save @tinkoff/utils
```

Used
```javascript
import pathOr from '@tinkoff/utils/object/pathOr';
import compose from '@tinkoff/utils/function/compose';
import toLower from '@tinkoff/utils/string/toLower';
import map from '@tinkoff/utils/array/map'

const toLowerName = compose(
    toLower,
    pathOr(['name'], '')
);
const result = map(toLowerName)([{name: 'testA'}, {name: 'testb'}])
```

## Library highlights
- Each utility located in a separate file, in a directory corresponding to the structure of the library
- Uses ES2015+
- Performance is one of the main priority
- Each utility solves strictly one problem
- Utility is a pure function
- Most of the utilities are automatically curried
- The arguments to utilities are arranged to make it convenient for currying (the data to be operated is supplied last)
- Each utility has its own doc written in JSDoc
- Utilities covered with tests using Jest
- Inspired by [Ramda](http://ramdajs.com)

## The structure of the library
* `/array` - set to work with arrays or array-like objects
* `/function` - set to work with functions (composition, currying, etc.), also set of simple functions (noop, T, F)
* `/is` - set to check argument type or structure
* `/object` - set to work with objects
* `/promise` - set to work with promises
* `/string` - set to work with strings
* `/` - root contains utilities which don't satisfy any of the above categories or are universal

## Comparison with other libraries

We compared with following libraries:
* nodejs 8.5.0
* webpack 4.8.3
* lodash 4.7.14
* ramda 0.22.1
* @tinkoff/utils 1.0.0

### Benchmarks
You can find benchmarks tests in `__benchmarks__` directory for specific util

| Utility | Lodash | Ramda | Utils |
| --- | --- | --- | --- |
| clone | 120,807 ops/sec | 112,053 ops/sec | 293,572 ops/sec |
| array/filter | 2,080,728 ops/sec | 1,849,633 ops/sec | 2,046,113 ops/sec |
| is/empty | 1,506,963 ops/sec | 474,177 ops/sec | 3,731,564 ops/sec |
| function/flip | 7,528,745 ops/sec | 3,735,143 ops/sec | 3,490,207 ops/sec |
| object/path | 12,023,128 ops/sec | 8,894,639 ops/sec | 7,587,076 ops/sec |
| string/trim | 4,215,928 ops/sec | 1,034,655 ops/sec | 6,029,794 ops/sec |

### Bundle size
Let's try to compare bundle size after bundling using webpack, if need to use only small bunch of utilites (see details [here](./__bundleSize__)):

| Library | Bundle size |
| --- | ------ |
| import _ from 'lodash' | 70.1 kb |
| import ... from 'lodash/...' | 21.8 kb |
| import R from 'ramda' | 41.3 kb |
| import ... from 'ramda/src/...' | 10 kb |
| import ... from '@tinkoff/utils/...' | 2.32 kb |

Detailed comparison with specific library see in [COMPARE.md](./COMPARE.md)