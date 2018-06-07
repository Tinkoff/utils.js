import reject from './reject';
import curryN from '../function/curryN';
import flip from '../function/flip';
import includes from './includes';

/**
 * Returns a new list without values in the first argument.
 *
 * @param {Array} xs The values to be removed from `list2`.
 * @param {Array} list The array to remove values from.
 * @return {Array} The new array without values in `list1`.
 * @example
 *
 *      without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
 */
export default curryN(2, (xs, list) => reject(flip(includes)(xs), list));
