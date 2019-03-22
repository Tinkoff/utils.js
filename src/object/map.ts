import curryN from '../function/curryN';
import { ObjBaseBy, ObjBase } from '../typings/types';

interface MapObject {
    <O extends Record<any, any>, R>(fn: ObjBaseBy<O, R>, obj: O): Record<keyof O, R>;
    <K extends string, V, R>(fn: ObjBase<K, V, R>): <O extends Record<any, any>>(obj: O) => Record<keyof O, R>;
}

/**
 * Applies `fn` to each of the `obj` values, and returns new object.
 *
 * @param {Function} fn The function to be called on every value of the input `obj`. Receives three argument, `value`, `key`, `obj`.
 * @param {Object} obj The object to be iterated over.
 * @return {Object} The new object.
 * @example
 *
 *      var double = x => x * 2;
 *
 *      map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 */
export default curryN(2, <O extends Record<any, any>, R>(fn: ObjBaseBy<O, R>, obj: O = {} as any) => {
    const result: Record<keyof O, R> = {} as any;

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = fn(obj[key], key, obj);
        }
    }

    return result;
}) as MapObject;
