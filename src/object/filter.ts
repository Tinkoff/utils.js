import curryN from '../function/curryN';
import objectKeys from './keys';
import { Prop, ObjPred } from '../typings/types';

interface FilterObj {
    <O extends Record<any, any>>(fn: ObjPred<keyof O, O[keyof O]>, obj: O): Partial<O>;
    <K extends Prop, V>(fn: ObjPred<K, V>): <O extends Record<K, V>>(obj: O) => Partial<O>;
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
export default curryN(2, <O extends Record<any, any>>(fn: ObjPred<keyof O, O[keyof O]>, obj: O = {} as any) => {
    const keys = objectKeys(obj);
    const result: Partial<O> = {};

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];

        if (fn(obj[key], key, obj)) {
            result[key] = obj[key];
        }
    }

    return result;
}) as FilterObj;
