import curryN from '../function/curryN';

interface All {
    <T>(fn: (a: T) => boolean, list: ReadonlyArray<T>): boolean;
    <T>(fn: (a: T) => boolean): (list: ReadonlyArray<T>) => boolean;
}

/**
 * Returns `true` if all the elements of the array match the predicate,
 * `false` otherwise.
 *
 * @param {Function} fn The predicate function.
 * @param {Array} arr The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied all elements, `false`
 *         otherwise.
 * @example
 *
 *      var lessThan2 = x => x < 2;
 *      var lessThan3 = x => x < 3;
 *      all(lessThan2)([1, 2]); //=> false
 *      all(lessThan3)([1, 2]); //=> true
 */
export default curryN(2, (fn, arr = []) => {
    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i], i, arr)) {
            return false;
        }
    }

    return true;
}) as All;
