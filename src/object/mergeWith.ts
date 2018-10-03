import { mergeWith } from '../typings/types';
import curryN from '../function/curryN';
import objectKeys from './keys';

/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the others objects. If a key exists in several objects
 * provided `fn` will be called and should return resolve value
 *
 * @param {Function} fn function to call if prop conflict apperar. Receives three argument, `valueLeft`, `valueRight`,
 * `key`, `leftObj`, `rightObj`.
 * @param {...Object} sources
 * @return {Object}
 * @example
 *
 * mergeWith((x, y) => x + y, { 'name': 'fred', 'age': 10 }, { 'age': 40 }); //=> { 'name': 'fred', 'age': 50 }
 */
export default curryN(3, (fn, ...sources) => {
    const result = Object.assign({}, sources[0]);

    for (let i = 1; i < sources.length; i++) {
        const source = sources[i];
        const keys = objectKeys(source);

        for (let j = 0; j < keys.length; j++) {
            const key = keys[j];

            if (Object.prototype.hasOwnProperty.call(result, key)) {
                result[key] = fn(result[key], source[key], key, result, source);
            } else {
                result[key] = source[key];
            }
        }
    }

    return result;
}) as typeof mergeWith
