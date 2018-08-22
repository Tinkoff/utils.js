import { drop } from '../typings/types';
import slice from './slice';
import curryN from '../function/curryN';
/**
 * Returns all but the first `n` elements of the given list, string.
 *
 * @param {Number} n
 * @param {*} xs
 * @return {*} A copy of list without the first `n` elements
 * @example
 *
 *      drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
 *      drop(3, ['foo', 'bar', 'baz']); //=> []
 *      drop(4, ['foo', 'bar', 'baz']); //=> []
 */

export default curryN(2, (n, xs) => (
    slice(Math.max(0, n), Infinity, xs)
)) as typeof drop
