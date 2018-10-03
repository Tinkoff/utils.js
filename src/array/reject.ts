import curryN from '../function/curryN';
import { reject } from '../typings/types';

/**
 * Takes a predicate and a "arr", and returns a new array of the
 * same type containing the members of the given arr which do not satisfy the
 * given predicate.
 *
 * @param {Function} fn - predicate
 * @param {Array} arr
 * @return {Array}
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      reject(isEven, [1, 2, 3, 4]); //=> [1, 3]
 */
export default curryN(2, (fn, arr = []) => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }

    return result;
}) as typeof reject
