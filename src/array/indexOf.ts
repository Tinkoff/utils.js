import { indexOf } from '../typings/types';
import curryN from '../function/curryN';

/**
 * Returns the position of the first occurrence of an item in an array, or -1
 * if the item is not included in the array.
 *
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @example
 *
 *      indexOf(3, [1,2,3,4]); //=> 2
 *      indexOf(10, [1,2,3,4]); //=> -1
 */

export default curryN(2, (target, xs) => Array.prototype.indexOf.call(xs, target)) as typeof indexOf
