import curryN from '../function/curryN';
import { ArrPred } from '../typings/types';

interface Reject {
    <T>(fn: ArrPred<T>, arr: ArrayLike<T>): T[];
    <T>(fn: ArrPred<T>): (arr: ArrayLike<T>) => T[];
}

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
export default curryN(2, <T>(fn: ArrPred<T>, arr: ArrayLike<T> = []) => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }

    return result;
}) as Reject;
