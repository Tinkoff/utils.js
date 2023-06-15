import curryN from '../function/curryN';
import { ArrPred } from '../typings/types';

interface FindLastIndex {
    <T>(fn: ArrPred<T>, list: ArrayLike<T>): number;
    <T>(fn: ArrPred<T>): (list: ArrayLike<T>) => number;
}

/**
 * Returns the index of the last element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} arr The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}, {a: 2}, {a: 1}];
 *      findLastIndex(x => x.a === 2)(xs); //=> 3
 *      findLastIndex(x => x.a === 4)(xs); //=> -1
 */
export default curryN(2, <T>(fn: ArrPred<T>, arr: ArrayLike<T> = []) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (fn(arr[i], i, arr)) {
            return i;
        }
    }

    return -1;
}) as FindLastIndex;
