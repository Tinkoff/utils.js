import { groupBy } from '../typings/types';
import curryN from '../function/curryN';
import objectKeys from './keys';

/**
 * Creates an object composed of keys generated from the results of running
 * each element of object thru `fn`. The corresponding
 * value of each key is an array of elements responsible for generating the key.
 *
 * @param {Function} fn The function to transform value to group key. Receives three argument, `value`, `key`, `obj`.
 * @param {Object} obj The obj to iterate over.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * groupBy(x => x, { a: 1, b: 1, c: 3});// => { '1': [1, 1], '3': [3] }
 */
export default curryN(2, (fn, obj = {}) => {
    const result = {};
    const keys = objectKeys(obj);

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const groupValue = fn(obj[key], key, obj);

        if (!result[groupValue]) {
            result[groupValue] = [];
        }

        result[groupValue].push(obj[key]);
    }

    return result;
}) as typeof groupBy
