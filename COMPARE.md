# Comparison with other libraries

### [Ramda](http://ramdajs.com/)
Ramda was a huge inspiration for Tinkoff Utils! it has a lot of similarities with naming style, uses same functional programming approach and many other things, with luck of some less popular design ideas like `__` prefixes, `lens*` functions and etc.

| Ramda | Utils |
| --- | ------ |
| R.all | /array/all |
| R.allPass | /function/allPass |
| R.always | /function/always |
| R.any | /array/any |
| R.anyPass | /function/anyPass |
| R.both | /function/both |
| R.clone | /clone |
| R.complement | /function/complement |
| R.compose | /function/compose |
| R.composeP | /function/composeP |
| R.concat | /array/concat |
| R.cond | /function/cond |
| R.contains | /array/includes |
| R.curry | /function/curry (`__` not supported) |
| R.curryN | /function/curryN |
| R.defaultTo | /defaultTo |
| R.difference | /array/difference |
| R.dropWhile | /array/dropWhile |
| R.either | /function/either |
| R.empty | /is/empty |
| R.equals | /is/equal |
| R.endsWith | /string/endsWith | !only for strings |
| R.F | /function/F |
| R.filter | /array/filter | for arrays, /object/filter | for objects |
| R.find | /array/find |
| R.findIndex | /array/findIndex |
| R.flatten | /array/flatten |
| R.flip | /function/flip |
| R.forEach | /array/each |
| R.forEachObjIndexed | /object/each |
| R.fromPairs | /object/fromPairs |
| R.groupBy | /object/groupBy | for objects |
| R.has | /object/has |
| R.head | /array/head |
| R.identity | /function/identity |
| R.ifElse | /function/ifElse |
| R.intersection | /array/intersection |
| R.is | /is/* |
| R.isEmpty | /is/empty |
| R.isNil | /is/nil |
| R.join | /array/join |
| R.keys | /object/keys |
| R.last | /array/last |
| R.length | /array/length |
| R.map | /array/map | for arrays, /object/map | for objects |
| R.mapObjIndexed | /object/map |
| R.maxBy | /array/maxBy |
| R.merge | /object/merge (accepts n arguments, bot not less than 2) |
| R.mergeAll | /object/merge (accepts an argument list not an array of arguments) |
| R.mergeDeepLeft | /object/mergeDeep |
| R.mergeWith | /object/mergeWith |
| R.negate | /negate |
| R.not | /not |
| R.nth | /array/nth |
| R.objOf | /object/objOf |
| R.omit | /object/omit |
| R.once | /function/once |
| R.path | /object/path |
| R.pathEq | /object/pathEq |
| R.pathOr | /object/pathOr **Note** order of arguments is different (Utils always accepts path as first argument) |
| R.pathSatisfies | /object/pathApply |
| R.pick | /object/pick |
| R.pickBy | /object/pickBy |
| R.pipe | /object/compose (prefer to use compose) |
| R.prop | /object/prop |
| R.propEq | /object/propEq |
| R.propOr | /object/propOr **Note** order of arguments is different (Utils always accepts prop name as first argument) |
| R.propApply | /object/propApply |
| R.range | /array/range |
| R.reduce | /array/reduce, /object/reduce |
| R.reduceWhile | /array/reduceWhile |
| R.reject | /array/reject |
| R.repeat | /array/repeat |
| R.replace | /string/replace |
| R.sort | /array/sort |
| R.sortBy | /array/sortBy |
| R.split | /string/split |
| R.startsWith | /string/startsWith |
| R.sum | /array/sum |
| R.tail | /array/tail |
| R.take | /array/take |
| R.tap | /function/tap |
| R.test | /string/test |
| R.toLower | /string/toLower |
| R.toPairs | /object/toPairs |
| R.toString | /string/toString |
| R.toUpper | /string/toUpper |
| R.trim | /string/trim |
| R.type | /type |
| R.uniq | /array/uniq |
| R.uniqBy | /array/uniqBy |
| R.values | /object/values |
| R.when | /function/when |
| R.where | /object/where |
| R.zip | /array/zip |
| R.zipWith | /array/zipWith |
| R.comparator | /function/comparator |
| R.indexOf | /array/indexOf |
| R.adjust | /array/adjust |
| R.append | /array/append |
| R.slice | /array/slice |
| R.drop | /array/drop |
| R.dropLast | /array/dropLast |
| R.remove | /array/remove |
| R.update | /array/update |
| R.without | /array/without |


### [Lodash](https://lodash.com/)
Be careful when migrating from lodash to Utils:
1. Check function signature, since Utils uses data as the last argument in contrast with lodash
1. Singular lodash methods can accept various argument types when Utils functions are focused and cohesive
1. Some Lodash functions mutate passed arguments

| Lodash | Utils |
| --- | ------ |
| _.compact | /array/filter + /function/identity `filter(identity)` |
| _.concat | /array/concat |
| _.difference | /array/difference |
| _.dropWhile | /array/dropWhile |
| _.findIndex | /array/findIndex |
| _.first | /array/head |
| _.flattenDeep | /array/flatten |
| _.fromPairs | /object/fromPairs |
| _.intersection | /array/intersection |
| _.join | /array/join |
| _.last | /array/last |
| _.nth | /array/nth |
| _.pull* | pull* mutates array, if there no need in it, then /array/filter + /function/* |
| _.remove | mutates date, otherwise /array/filter + /function/* |
| _.reverse | /array/reverse |
| _.take | /array/take |
| _.uniq | /array/uniq |
| _.uniqBy | /array/uniqBy |
| _.without | /array/filter + /function/* |
| _.zip | /array/zip |
| _.zipWith | /array/zipWith |
| _.each | /array/each, /object/each |
| _.forEach | /array/each, /object/each |
| _.every | /array/all |
| _.find | /array/find |
| _.groupBy | /object/groupBy |
| _.includes | /array/includes |
| _.keyBy | /object/keyBy |
| _.map | /array/map, /object/map |
| _.partition | /array/partition |
| _.reduce | /array/reduce, /object/reduce |
| _.reject | /array/filter + /not `filter(not)` |
| _.shuffle | /array/shuffle |
| _.some | /array/any |
| _.sortBy | /array/sortBy |
| _.curry | /function/curry |
| _.debounce | /function/debounce |
| _.flip | /function/flip |
| _.negate | /function/complement |
| _.once | /function/once |
| _.thtottle | /function/throttle |
| _.castArray | /array/toArray |
| _.clone | Object.assign({}, x) |
| _.cloneDeep | /clone |
| _.is* | /is/* a small part |
| _.assign | Object.assign |
| _.at | /array/map + /object/path |
| _.defaults | /object/merge |
| _.defaultsDeep | /object/mergeDeep |
| _.entries | /object/toPairs |
| _.forOwn | /object/each |
| _.get | /object/path, /object/pathOr `get(obj, 'a.b[0].c', 'dflt') => pathOr(['a', 'b', 0, 'c'], 'dflt', obj)` |
| _.has | /object/has |
| _.keys | /object/keys |
| _.mapKeys | /object/reduce + specific function |
| _.mapValues | /object/map |
| _.merge | /object/mergeDeep |
| _.omit | /object/omit |
| _.pick | /object/pick |
| _.pickBy | /object/pickBy |
| _.result | /object/pathApply + /function/applyOrReturn `result(obj, 'a.b', 'dflt') => pathApply(['a', 'b'], applyOrReturn, obj) || 'dflt'` |
| _.set | /object/pathSet `set(obj, 'a.b[0]', 'val') => newObj = pathSet(['a', 'b', 0], 'val', obj)` |
| _.toPairs | /object/toPairs |
| _.values | /object/values |
| _.tap | /function/tap |
| _.capitalize | /string/capitalize |
| _.endsWith | /string/endsWith |
| _.escape | /string/escape |
| _.escapeRegExp | /string/escapeRegExp |
| _.repeat | /array/repeat + /array/join |
| _.replace | /string/replace |
| _.split | /string/split |
| _.toLower | /string/toLower |
| _.toUpper | /string/toUpper |
| _.trim | /string/trim |
| _.trimStart | /string/trimLeft |
| _.unescape | /string/unescape |
| _.cond | /function/cond |
| _.conforms | /object/where |
| _.constant | /function/always |
| _.defaultTo | /defaultTo |
| _.identity | /function/identity |
| _.noop | /function/noop |
| _.range | /array/range |
| _.stub* | /function/always |
| _.uniqueId | /uniqueId |
