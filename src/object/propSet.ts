import curryN from '../function/curryN';
import { Prop, ReplaceType } from '../typings/types';
import has from './has';

interface PropSet {
    <K extends Prop, V, O>(prop: K, val: V, obj: O): ReplaceType<O, K, V>;
    <K extends Prop, V>(prop: K, val: V): <O>(obj: O) => ReplaceType<O, K, V>;
    <K extends Prop>(prop: K): {
        <V, O>(val: V, obj: O): ReplaceType<O, K, V>;
        <V>(val: V): <O>(obj: O) => ReplaceType<O, K, V>;
    };
}

/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. All non-primitive properties are
 * copied by reference.
 *
 * **Note:** If property in the object is equal to value by reference then function
 * just returns object without changes
 *
 * @param {String} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @example
 *
 *      propSet('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */
export default curryN(3, <K extends Prop>(prop: K, val, obj = {} as any) => {
    if (has(prop, obj) && obj[prop] === val) {
        return obj;
    }

    return {
        ...obj,
        [prop]: val,
    };
}) as PropSet;
