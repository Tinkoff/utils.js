import curryN from '../function/curryN';
import objectKeys from './keys';
import { keyBy } from '../typings/types';

/**
 * Creates an object composed of keys generated from the results of running
 * each element of object thru `fn`. The corresponding value of
 * each key is the last element responsible for generating the key
 *
 * @param {Function} fn The function to transform value to group key. Receives three argument, `value`, `key`, `obj`.
 * @param {Object} obj The obj to iterate over.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * keyBy(x => x < 2, { a: 0, b: 1, c: 3});// => { false: 1, true: 3 }
 */

export default curryN(2, (fn, obj = {}) => {
    const result = {};
    const keys = objectKeys(obj);

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const groupValue = fn(obj[key], key, obj);

        result[groupValue] = obj[key];
    }

    return result;
}) as typeof keyBy
