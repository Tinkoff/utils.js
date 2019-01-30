import curryN from '../function/curryN';

interface Intersection {
    <T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
    <T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];
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
export default curryN(2, (a = [], b = []) => {
    const result = [];

    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) >= 0) {
            result.push(a[i]);
        }
    }

    return result;
}) as Intersection;
