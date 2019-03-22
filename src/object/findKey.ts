import curryN from '../function/curryN';
import { ObjPred } from '../typings/types';

interface FindKey {
    <O extends Record<any, any>>(fn: ObjPred<keyof O, O[keyof O]>, obj: O): keyof O | void;
    <K extends string, V>(fn: ObjPred<K, V>): <O extends Record<K, V>>(obj: O) => keyof O | void;
}

/**
 * Returns first key in `obj` satisfied to `fn`, or undefined if there is no such keys
 *
 * @param {Function} fn Receives three argument, `value`, `key`, `obj`
 * @param {Object} obj
 * @returns {String|undefined}
 *
 * @example
 *
 *      findKey(identity, {a: 0, b: 3}) // => 'b'
 *      findKey(x => x > 3, { a: 2, b: 1 }) // => undefined
 *      findKey(x => x > 3, { a: 4, b: 5 }) // => 'a'
 */
export default curryN(2, <O extends Record<any, any>>(fn: ObjPred<keyof O, O[keyof O]>, obj: O = {} as any) => {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (fn(obj[key], key, obj)) {
                return key;
            }
        }
    }
}) as FindKey;
