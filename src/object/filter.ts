import curryN from '../function/curryN';
import objectKeys from './keys';
import { Dictionary, Filter } from '../typings/types';

interface FilterObj {
    <T>(fn: (value: T) => boolean): Filter<T>;
    <T>(fn: (value: T) => boolean, obj: Dictionary<T>): Dictionary<T>;
}

/**
 * Takes a predicate and a object, and returns a new object
 * containing only members which satisfy the
 * given predicate.
 *
 * @param {Function} fn
 * @param {Object} obj
 * @return {Object}
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
export default curryN(2, (fn, obj = {}) => {
    const keys = objectKeys(obj);
    const result = {};

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];

        if (fn(obj[key], key, obj)) {
            result[key] = obj[key];
        }
    }

    return result;
}) as FilterObj;
