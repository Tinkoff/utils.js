import curryN from '../function/curryN';
import { MapFunc } from '../typings/types';

interface Map {
    <T, R>(fn: MapFunc<T, R>, arr: ArrayLike<T>): R[];
    <T, R>(fn: MapFunc<T, R>): (arr: ArrayLike<T>) => R[];
}

/**
 * Creates an array of values by running each element in list through fn. The fn is invoked with three arguments:
 * (value, index, arr).
 *
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} arr The list to be iterated over.
 * @return {Array} The new list.
 * @example
 *
 *      var double = x => x * 2;
 *
 *      map(double, [1, 2, 3]); //=> [2, 4, 6]
 */
export default curryN(2, <T, R>(fn: MapFunc<T, R>, arr: ArrayLike<T> = []) => {
    const len = arr.length;
    const result: R[] = new Array(len);

    for (let i = 0; i < len; i++) {
        result[i] = fn(arr[i], i, arr);
    }

    return result;
}) as Map;
