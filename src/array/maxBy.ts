import curryN from '../function/curryN';
import { maxBy } from '../typings/types';

/**
 * Return max value in array, depending on result of calling `fn`
 *
 * @param {Function} fn The function invoked per element.
 * @param {Array} arr
 * @returns {*} Returns the maximum value.
 * @example
 *
 *      var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 *      maxBy(o => o.n, objects); // => { 'n': 2 }
 *
 */
export default curryN(2, (fn, arr = []) => {
    let result;
    let max = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        const computed = fn(arr[i], i, arr);

        if (computed > max) {
            max = computed;
            result = arr[i];
        }
    }

    return result;
}) as typeof maxBy
