import curryN from '../function/curryN';
import { each } from '../typings/types';

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
export default curryN(2, (fn, arr = []) => {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr);
  }
}) as typeof each

