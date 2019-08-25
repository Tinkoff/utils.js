import curryN from '../function/curryN';
import { Prop, ReplaceType, ObjBase } from '../typings/types';
import has from './has';
import propApply from './propApply';

interface PropSetBy {
    <K extends Prop, O extends Record<any, any>, R>(prop: K, fn: ObjBase<K, O[K], R>, obj: O): ReplaceType<O, K, R>;
    <K extends Prop, V, R>(prop: K, fn: ObjBase<K, V, R>): <O>(obj: O) => ReplaceType<O, K, R>;
    <K extends Prop>(prop: K): {
        <O extends Record<any, any>, R>(fn: ObjBase<K, O[K], R>, obj: O): ReplaceType<O, K, R>;
        <V, R>(fn: ObjBase<K, V, R>): <O>(obj: O) => ReplaceType<O, K, R>;
    };
}

/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the result of `fn` call.
 *
 * **Note:** If property in the object is equal to value by reference then function
 * just returns object without changes
 *
 * @param {String} prop The property name to set
 * @param {Function} fn The function to execute
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @example
 *
 *      propSetBy('a', x => x+1, {a: 1}); //=> {a: 2}
 */
export default curryN(3, <K extends Prop>(prop: K, fn: ObjBase<K, any, any>, obj = {} as any) => {
    const res = propApply(prop, fn, obj);

    if (has(prop, obj) && obj[prop] === res) {
        return obj;
    }

    return {
        ...obj,
        [prop]: res,
    };
}) as PropSetBy;
