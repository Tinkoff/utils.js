import { join } from 'ramda';
import curryN from '../function/curryN';
import isArray from '../is/array';

/**
 * Returns a string made by inserting the `separator` between each element and
 * concatenating all the elements into a single string.
 *
 * @param {String} separator The string used to separate the elements.
 * @param {Array} arr The elements to join into a string.
 * @return {String} str The string made by concatenating `arr` with `separator`.
 * @example
 *
 *      var spacer = join(' ');
 *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
 *      join('|', [1, 2, 3]);    //=> '1|2|3'
 */
export default curryN(2, (separator = '', arr = []) => {
    if (!isArray(arr)) {
        arr = Array.prototype.slice.call(arr);
    }

    return arr.join(separator);
}) as typeof join
