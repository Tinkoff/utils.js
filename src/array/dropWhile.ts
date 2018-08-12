import { dropWhile } from 'ramda';
import curryN from '../function/curryN';

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
export default curryN(2, (fn, arr = []) => {
    let idx = 0;

    while (idx < arr.length && fn(arr[idx])) {
        idx += 1;
    }

    return arr.slice(idx);
}) as typeof dropWhile
