import curryN from '../function/curryN';
import { ArrVoid } from '../typings/types';

interface Each {
    <T>(fn: ArrVoid<T>, arr: ArrayLike<T>): void;
    <T>(fn: ArrVoid<T>): (arr: ArrayLike<T>) => void;
}

/**
 * Iterate over an input `list`, calling a provided function `fn` for each
 * element in the list.
 *
 * @param {Function} fn The function to invoke. Receives three argument: `value`, `index`, `arr`.
 * @param {Array} arr The list to iterate over.
 * @example
 *
 *      var printXPlusFive = x => console.log(x + 5);
 *      each(printXPlusFive, [1, 2, 3]);
 *      // logs 6
 *      // logs 7
 *      // logs 8
 */
export default curryN(2, <T>(fn: ArrVoid<T>, arr: ArrayLike<T> = []) => {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i], i, arr);
    }
}) as Each;
