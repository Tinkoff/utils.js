import { Prop, KeyValuePairs } from '../typings/types';

interface FromPairs {
    <K extends Prop, V>(pairs: KeyValuePairs<K, V>): Record<K, V>;
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
export default (<K extends Prop, V>(arr: KeyValuePairs<K, V> = []) => {
    const result: { [k in K]: V } = {} as any;

    for (let i = 0; i < arr.length; i++) {
        result[arr[i][0]] = arr[i][1];
    }

    return result;
}) as FromPairs;
