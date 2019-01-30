import { KeyValuePair } from '../typings/types';

interface FromPairs {
    <V>(pairs: Array<KeyValuePair<string, V>>): { [index: string]: V };
    <V>(pairs: Array<KeyValuePair<number, V>>): { [index: number]: V };
}

/**
 * Creates a new object from a list key-value pairs. If a key appears in
 * multiple pairs, the rightmost pair is included in the object.
 *
 * @param {Array} arr An array of two-element arrays that will be the keys and values of the output object.
 * @return {Object} The object made by pairing up `keys` and `values`.
 * @example
 *
 *      fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
 */
export default ((arr = []) => {
    const result = {};

    for (let i = 0; i < arr.length; i++) {
        result[arr[i][0]] = arr[i][1];
    }

    return result;
}) as FromPairs;
