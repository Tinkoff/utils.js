import curryN from '../function/curryN';
import { Ord, ArrOrdFunc } from '../typings/types';

interface MaxBy {
    <T, R extends Ord>(fn: ArrOrdFunc<T, R>, arr: ArrayLike<T>): T;
    <T, R extends Ord>(fn: ArrOrdFunc<T, R>): (arr: ArrayLike<T>) => T;
}

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
export default curryN(2, <T, R extends Ord>(fn: ArrOrdFunc<T, R>, arr: ArrayLike<T> = []) => {
    let result;
    let max: Ord = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        const computed = fn(arr[i], i, arr);

        if (computed > max) {
            max = computed;
            result = arr[i];
        }
    }

    return result;
}) as MaxBy;
