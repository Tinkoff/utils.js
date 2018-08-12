import { zip, KeyValuePair } from 'ramda';
import curryN from '../function/curryN';

/**
 * Creates a new list out of the two supplied by pairing up equally-positioned
 * items from both lists. The returned list is truncated to the length of the
 * shorter of the two input lists.
 *
 * @param {Array} a The first array to consider.
 * @param {Array} b The second array to consider.
 * @return {Array} The list made by pairing up same-indexed elements of `a` and `b`.
 * @example
 *
 *      zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 */
export default curryN(2, (a = [], b = []) => {
    const len = Math.min(a.length, b.length);
    const result = new Array(len);

    for (let i = 0; i < len; i++) {
        result[i] = [a[i], b[i]];
    }

    return result;
}) as typeof zip
