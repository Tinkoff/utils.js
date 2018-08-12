import { take } from 'ramda';
import curryN from '../function/curryN';

/**
 * Returns the first `n` elements of the given array or string
 *
 * @param {Number} n
 * @param {Array|String} arr
 * @return {*}
 * @example
 *
 *      take(1, ['foo', 'bar', 'baz']); //=> ['foo']
 *      take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      take(3, 'ramda');               //=> 'ram'
 */
export default curryN(2, (n, arr = []) => arr.slice(0, n)) as typeof take
