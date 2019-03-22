import curryN from '../function/curryN';
import { ArrPred } from '../typings/types';

interface FindLast {
    <T>(fn: ArrPred<T>, list: ArrayLike<T>): T | undefined;
    <T>(fn: ArrPred<T>): (list: ArrayLike<T>) => T | undefined;
}

/**
 * Returns the last element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @example
 *
 *      const xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *
 *      findLast(propEq('a', 1))(xs); //=> {a: 1, b: 1}
 *      findLast(propEq('a', 4))(xs); //=> undefined
 */
export default curryN(2, <T>(fn: ArrPred<T>, list: ArrayLike<T>) => {
    for (let i = list.length - 1; i >= 0; i--) {
        if (fn(list[i], i, list)) {
            return list[i];
        }
    }
}) as FindLast;
