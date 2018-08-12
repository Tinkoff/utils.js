import { maxBy } from 'ramda';
import curryN from '../function/curryN';

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
    let result = arr[0];
    let max = fn(result, 0, arr);

    for (let i = 1; i < arr.length; i++) {
        const computed = fn(arr[i], i, arr);

        if (computed > max) {
            max = computed;
            result = arr[i];
        }
    }

    return result;
}) as typeof maxBy
