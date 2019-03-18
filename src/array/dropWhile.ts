import curryN from '../function/curryN';
import slice from './slice';
import { ArrPred } from '../typings/types';

interface DropWhile {
    <T>(fn: ArrPred<T>, list: ArrayLike<T>): T[];
    <T>(fn: ArrPred<T>): (list: ArrayLike<T>) => T[];
}

/**
 * Returns a new list excluding the leading elements of a given list which
 * satisfy the supplied predicate function. It passes each value to the supplied
 * predicate function, skipping elements while the predicate function returns
 * `true`.
 *
 * @param {Function} fn The function called per iteration.
 * @param {Array} arr The collection to iterate over.
 * @return {Array} A new array.
 * @example
 *
 *      var lteTwo = x => x <= 2;
 *
 *      dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
 */
export default curryN(2, <T>(fn: ArrPred<T>, arr: ArrayLike<T> = []) => {
    let idx = 0;

    while (idx < arr.length && fn(arr[idx], idx, arr)) {
        idx += 1;
    }

    return slice(idx, arr.length, arr);
}) as DropWhile;
