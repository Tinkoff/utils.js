import curryN from '../function/curryN';
import { ArrPred } from '../typings/types';

interface FindIndex {
    <T>(fn: ArrPred<T>, list: ArrayLike<T>): number;
    <T>(fn: ArrPred<T>): (list: ArrayLike<T>) => number;
}

/**
 * Returns the index of the first element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} arr The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      findIndex(x => x.a === 2)(xs); //=> 1
 *      findIndex(x => x.a === 4)(xs); //=> -1
 */
export default curryN(2, <T>(fn: ArrPred<T>, arr: ArrayLike<T> = []) => {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            return i;
        }
    }

    return -1;
}) as FindIndex;
