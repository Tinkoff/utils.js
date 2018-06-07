import curryN from '../function/curryN';
import objectKeys from './keys';

/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @param {Array} props an array of String property names to omit from the new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with properties from `names` not on it.
 * @example
 *
 *      omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
 */
export default curryN(2, (props = [], obj = {}) => {
    const result = {};
    const keys = objectKeys(obj);

    for (let i = 0; i < keys.length; i++) {
        const prop = keys[i];

        if (props.indexOf(prop) === -1) {
            result[prop] = obj[prop];
        }
    }

    return result;
});
