import curryN from '../function/curryN';

/**
 * Dispatches call to arr.indexOf, returns true if arr is array and value in the array or
 * if arr is string and value is substring of arr
 *
 * @param {*} value The item to compare against.
 * @param {Array | String} arr The array to consider.
 * @return {Boolean} `true` if the item is in the list, `false` otherwise.
 * @example
 *
 *      includes(3, [1, 2, 3]); //=> true
 *      includes(4, [1, 2, 3]); //=> false
 *      includes('test', 'aaatest'); //=> true
 */
export default curryN(2, (value, arr = []) => arr.indexOf(value) !== -1);
