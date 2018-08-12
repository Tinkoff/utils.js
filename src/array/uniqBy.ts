import { uniqBy } from 'ramda';
import curryN from '../function/curryN';

/**
 * Returns unique items in array. Uniqueness is defined by `fn`.
 *
 * @param {Function} fn
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 *
 *      uniqBy(x => x % 2, [1, 2, 2, 3, 4, 5, 5, 5]) // [1, 2]
 */
export default curryN(2, (fn, arr = []) => {
    const result = [];
    const unq = Object.create(null);

    for (let i = 0; i < arr.length; i++) {
        const key = fn(arr[i]);

        if (!unq[key]) {
            result.push(arr[i]);
            unq[key] = true;
        }
    }

    return result;
}) as typeof uniqBy
