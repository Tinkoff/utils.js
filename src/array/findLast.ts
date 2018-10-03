import { findLast } from '../typings/types';
import curry from '../function/curry';

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
export default curry((fn, list: ReadonlyArray<any>) => {
    for (let i = list.length - 1; i >= 0; i--) {
        if (fn(list[i], i, list)) {
            return list[i];
        }
    }
}) as typeof findLast;
