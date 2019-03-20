import curryN from '../function/curryN';
import { Prop, ObjVoid } from '../typings/types';

interface EachObj {
    <O extends Record<any, any>>(fn: ObjVoid<keyof O, O[keyof O]>, obj: O): void;
    <K extends Prop, V>(fn: ObjVoid<K, V>): (obj: Record<K, V>) => void;
}

/**
 * Iterate over an input `object`, calling a provided function `fn` for each
 * key and value in the object.
 *
 * @param {Function} fn The function to invoke. Receives three argument, `value`, `key`, `obj`.
 * @param {Object} obj The object to iterate over.
 * @return {Object} The original object.
 * @example
 *
 *      var printKeyConcatValue = (value, key) => console.log(key + ':' + value);
 *      each(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
 *      // logs x:1
 *      // logs y:2
 */
export default curryN(2, <K extends Prop, V>(fn: ObjVoid<K, V>, obj: Record<K, V> = {} as any) => {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn(obj[key], key, obj);
        }
    }
}) as EachObj;
