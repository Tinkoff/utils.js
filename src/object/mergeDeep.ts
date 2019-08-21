import curryN from '../function/curryN';
import isPlainObject from '../is/plainObject';
import objectKeys from './keys';
import { Merge } from './merge';
import assign from '../assign';

/**
 * Create a new object with the own properties of the first object deeply merged with
 * the own properties of the other objects. If a key exists in several objects, then all values associated with this key
 * are merged recursively unless at least one of them is not a plain object. Merging is done from left to right.
 *
 * @param {...Object} sources
 * @return {Object}
 * @example
 *
 * mergeDeep({ 'name': 'fred', 'info': { 'age': 10, 'sex': 'm' } }, { 'info': { 'age': 40 }); //=> { 'name': 'fred', 'info': { 'age': 40, 'sex': 'm' } }
 */
const mergeDeep = (...sources: Record<any, any>[]) => {
    const result = assign(sources[0] || {});

    for (let i = 1; i < sources.length; i++) {
        const src = sources[i];

        if (!src) {
            continue;
        }

        const keys = objectKeys(src);

        for (let j = 0; j < keys.length; j++) {
            const key = keys[j];
            const value = src[key];
            const res = result[key];

            if (isPlainObject(res) && isPlainObject(value)) {
                result[key] = mergeDeep(res, value);
            } else {
                result[key] = value;
            }
        }
    }

    return result;
};

export default curryN(2, mergeDeep) as Merge;
