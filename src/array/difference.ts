import curryN from '../function/curryN';
import indexOf from './indexOf';

interface Difference {
    <T>(list1: ArrayLike<T>, list2: ArrayLike<T>): T[];
    <T>(list1: ArrayLike<T>): (list2: ArrayLike<T>) => T[];
}

/**
 * Returns the array of all elements in the first array not
 * contained in the second array.
 *
 * @param {Array} a The first array.
 * @param {Array} b The second array.
 * @return {Array} The elements in `a` that are not in `b`.
 * @example
 *
 *      difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
 *      difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
 */
export default curryN(2, <T>(a: ArrayLike<T> = [], b: ArrayLike<T> = []) => {
    const result = [];

    for (let i = 0; i < a.length; i++) {
        if (indexOf(a[i], b) < 0) {
            result.push(a[i]);
        }
    }

    return result;
}) as Difference;
