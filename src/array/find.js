import curryN from '../function/curryN';

/**
 * Returns the first element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * @param {Function} fn The predicate function used to determine if the element is the
 *        desired one.
 * @param {Array} arr The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      find(x => x.a === 2)(xs); //=> {a: 2}
 *      find(x => x.a === 4)(xs); //=> undefined
 */
export default curryN(2, (fn, arr = []) => {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            return arr[i];
        }
    }
});
