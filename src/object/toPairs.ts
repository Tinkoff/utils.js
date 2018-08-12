import { toPairs } from 'ramda';
import objKeys from './keys';
/**
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own properties.
 * @example
 *
 *      toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
 */
export default ((obj = {}) => {
    const keys = objKeys(obj);
    const len = keys.length;
    const result = new Array(len);

    for (let i = 0; i < len; i++) {
        result[i] = [keys[i], obj[keys[i]]];
    }

    return result;
}) as typeof toPairs
