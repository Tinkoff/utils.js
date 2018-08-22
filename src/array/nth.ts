import { nth } from '../typings/types';
import curryN from '../function/curryN';

/**
 * Returns the nth element of the given array. If n is negative the
 * element at index length + n is returned.
 *
 * @param {Number} index
 * @param {*} arr
 * @return {*}
 * @example
 *
 *      var list = ['foo', 'bar', 'baz', 'quux'];
 *      nth(1, list); //=> 'bar'
 *      nth(2, list); //=> 'baz'
 *      nth(-1, list); //=> 'quux'
 *      nth(-99, list); //=> undefined
 */
export default curryN(2, (index = 0, arr = []) => {
    if (index < 0) {
        index += arr.length;
    }

    return arr[index];
}) as typeof nth
