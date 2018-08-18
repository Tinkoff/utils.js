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
export default curry((fn, list) => {
    let idx = list.length - 1;

    while (idx >= 0) {
        if (fn(list[idx], idx, list)) {
            return list[idx];
        }

        idx -= 1;
    }

    return undefined;
});
