# Tinkoff Utils
JavaScript utility library with the primary task to simplify work with data, functions, promises, and more.
The main goals of the library are modularity, functional style, performance, and simplicity. 

## Example
Installation
```bash
$ npm i --save @tinkoff/utils
```

Usage
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

## Features
- Modular structure: utilities are located each in its file, structured by type.
- Written with performance in mind.
- Suitable for functional programming: every utility is a pure function with the order of arguments, convenient for currying.
- Modern codebase: project is written in ES2015+.
- Safe and secure to use: every utility is documented and covered with tests.

## The structure of the library
* `/array`: a set of utilities to operate on arrays or array-like objects;
* `/function`: a set of utilities to operate on functions (composition, currying and so on), also a set of simple functions (noop, T, F);
* `/is`: a set of type-checking utilities;
* `/object`: a set of utilities to operate on objects;
* `/promise`: a set of promise utilities;
* `/string`: a set of utilities to work with strings;
* `/`: the root contains utilities that don't satisfy any of the above categories or are universal.

## Comparison with other libraries
The comparison is between Tinkoff Utils and the following libraries:
* lodash 4.7.14
* ramda 0.22.1

### Benchmarks
You can find benchmarks in the `__benchmarks__` directory.

| Utility | Lodash | Ramda | Utils |
| --- | --- | --- | --- |
| clone | 120,807 ops/sec | 112,053 ops/sec | 293,572 ops/sec |
| array/filter | 2,080,728 ops/sec | 1,849,633 ops/sec | 2,046,113 ops/sec |
| is/empty | 1,506,963 ops/sec | 474,177 ops/sec | 3,731,564 ops/sec |
| function/flip | 7,528,745 ops/sec | 3,735,143 ops/sec | 3,490,207 ops/sec |
| object/path | 12,023,128 ops/sec | 8,894,639 ops/sec | 7,587,076 ops/sec |
| string/trim | 4,215,928 ops/sec | 1,034,655 ops/sec | 6,029,794 ops/sec |

### Bundle size
Bubdle size is compared to each other with the assumption that we need only a small subset of library methods (see details [here](./bundleSize)):
| Library | Bundle size |
| --- | --- |
| import _ from 'lodash' | 70.1 kb |
| import ... from 'lodash/...' | 21.8 kb |
| import R from 'ramda' | 41.3 kb |
| import ... from 'ramda/src/...' | 10 kb |
| import ... from '@tinkoff/utils/...' | 2.32 kb |

The detailed comparison with specific library see [COMPARE.md](./COMPARE.md)