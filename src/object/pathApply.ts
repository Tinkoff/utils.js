import curryN from '../function/curryN';
import path from './path';
import { pathApply } from '../typings/types';

/**
 * Returns the result of `fn` with given value at `path`.
 *
 * @param {[String]} paths The path to use.
 * @param {Function} fn function to apply
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} result of calling fn with nested property.
 *
 * @example
 *
 *      pathApply(['a', 'b'], x => 'is ' + x, {a: {b: 2}}); //=> is 2
 *      pathApply(['a', 'b'], x => x > 0, {a: {b: 2}}); //=> true
 */
export default curryN(3, (paths = [], fn, obj = {}) =>
    fn(path(paths, obj))
) as typeof pathApply;
