import curryN from '../function/curryN';
import indexOf from './indexOf';

interface Intersection {
    <T>(list1: ArrayLike<T>, list2: ArrayLike<T>): T[];
    <T>(list1: ArrayLike<T>): (list2: ArrayLike<T>) => T[];
}

/**
 * Combines two array into a set (i.e. no duplicates) composed of those
 * elements common to both arrays.
 *
 * @param {Array} a The first array.
 * @param {Array} b The second array.
 * @return {Array} The array of elements found in both `a` and `b`.
 * @example
 *
 *      intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
 */
export default curryN(2, <T>(a: ArrayLike<T> = [], b: ArrayLike<T> = []) => {
    const result = [];

    for (let i = 0; i < a.length; i++) {
        if (indexOf(a[i], b) >= 0) {
            result.push(a[i]);
        }
    }

    return result;
}) as Intersection;
