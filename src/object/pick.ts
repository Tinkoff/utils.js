import { pick } from '../typings/types';
import curryN from '../function/curryN';

/**
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 *
 * @param {[String]} props an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @example
 *
 *      pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 */
export default curryN(2, (props = [], obj = {}) => {
    const result = {};

    for (let i = 0; i < props.length; i++) {
        const prop = props[i];

        if (prop in obj) {
            result[prop] = obj[prop];
        }
    }

    return result;
}) as typeof pick
