import curryN from '../function/curryN';
import { Prop } from '../typings/types';

interface Assoc {
    <K extends Prop, V, O>(prop: K, val: V, obj: O): O & { [k in K]: V };
    <K extends Prop, V>(prop: K, val: V): <O>(obj: O) => O & { [k in K]: V };
    <K extends Prop>(prop: K): {
        <V, O>(val: V, obj: O): O & { [k in K]: V };
        <V>(val: V): <O>(obj: O) => O & { [k in K]: V };
    };
}

/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. All non-primitive properties are
 * copied by reference.
 *
 * @deprecated use object/propSet instead
 * @param {String} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @example
 *
 *      assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */
export default curryN(3, <K extends Prop, V, O>(prop: K, val: V, obj: O = {} as any) => ({
    ...obj,
    [prop]: val,
})) as Assoc;
