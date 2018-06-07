import curryN from '../function/curryN';

/**
 * Returns `true` if at least one of elements of the list match the predicate,
 * `false` otherwise.
 *
 * @param {Function} fn The predicate function.
 * @param {Array} arr The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
 *         otherwise.
 * @example
 *
 *      var lessThan0 = x => x < 0;
 *      var lessThan2 = x => x < 2;
 *      any(lessThan0)([1, 2]); //=> false
 *      any(lessThan2)([1, 2]); //=> true
 */
export default curryN(2, (fn, arr = []) => {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            return true;
        }
    }

    return false;
});
