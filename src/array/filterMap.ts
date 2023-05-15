import curryN from '../function/curryN';
import { ArrPred, MapFunc } from '../typings/types';

interface FilterMap {
    <T, R>(filterFn: ArrPred<T>, mapFn: MapFunc<T, R>, arr: ArrayLike<T>): R[];
    <T, R>(filterFn: ArrPred<T>, mapFn: MapFunc<T, R>): (arr: ArrayLike<T>) => R[];
}

/**
 * This is shortcut for filter + map, but applied in one iteration.
 *
 * @param {Function} filterFn - filter function
 * @param {Function} mapFn - map function
 * @param {Array} arr
 * @return {Array}
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *      var double = x => x * 2;
 *
 *      filterMap(isEven, double, [1, 2, 3, 4]); //=> [4, 8]
 *
 *      // this is equivalent to
 *      // map(double, filter(isEven, [1, 2, 3, 4]));
 */
export default curryN(3, <T, R>(filterFn: ArrPred<T>, mapFn: MapFunc<T, R>, arr: ArrayLike<T> = []) => {
    const result: R[] = [];

    for (let i = 0; i < arr.length; i++) {
        if (filterFn(arr[i], i, arr)) {
            result.push(mapFn(arr[i], i, arr));
        }
    }

    return result;
}) as FilterMap;
