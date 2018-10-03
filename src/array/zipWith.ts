import { zipWith } from '../typings/types';
import curryN from '../function/curryN';

/**
 * Creates a new list out of the two supplied by applying the function to each
 * equally-positioned pair in the lists. The returned list is truncated to the
 * length of the shorter of the two input lists.
 *
 * @param {Function} fn The function used to combine the two elements into one value.
 * @param {Array} a The first array to consider.
 * @param {Array} b The second array to consider.
 * @return {Array} The list made by combining same-indexed elements of `a` and `b`
 *         using `fn`.
 * @example
 *
 *      var f = (x, y) => {
 *        // ...
 *      };
 *      zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
 *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
 */
export default curryN(3, (fn, a = [], b = []) => {
    const len = Math.min(a.length, b.length);
    const result = new Array(len);

    for (let i = 0; i < len; i++) {
        result[i] = fn(a[i], b[i]);
    }

    return result;
}) as typeof zipWith
