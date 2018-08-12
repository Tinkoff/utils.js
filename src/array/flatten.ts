import { flatten as ramdaFlatten } from 'ramda';
import isArrayLike from '../is/arrayLike';
/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 *
 * @param {Array} arr The array to consider.
 * @return {Array} The flattened list.
 * @example
 *
 *      flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 */
const flatten = (arr = []) => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const a = arr[i];

        if (isArrayLike(a)) {
            const nested = flatten(a);

            for (let j = 0; j < nested.length; j++) {
                result.push(nested[j]);
            }
        } else {
            result.push(a);
        }
    }

    return result;
};

export default flatten as typeof ramdaFlatten
