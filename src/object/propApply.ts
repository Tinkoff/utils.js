import curryN from '../function/curryN';
import prop from './prop';
import { Prop, ObjBase } from '../typings/types';

interface PropApply {
    <K extends Prop, R, O extends Record<K, any>>(prop: K, fn: ObjBase<K, O[K], R>, obj: O): R;
    <K extends Prop, V, R>(prop: K, fn: ObjBase<K, V, R>, obj): R;
    <K extends Prop, V, R>(prop: K, fn: ObjBase<K, V, R>): (obj) => R;
    <K extends Prop>(prop: K): {
        <V, R>(fn: ObjBase<K, V, R>, obj): R;
        <V, R>(fn: ObjBase<K, V, R>): (obj) => R;
    };
}

/**
 * Returns the result of `fn` with value of property in `obj`.
 *
 * @param {String} propName The property name to apply.
 * @param {Function} fn function to apply
 * @param {Object} obj The object to retrieve the property from.
 * @return {*} result of calling fn with property.
 *
 * @example
 *
 *      propApply('a', x => 'is ' + x, {a: 2}); //=> is 2
 *      propApply('b', x => x > 0, {b: 2}); //=> true
 */
export default curryN(3, (propName: Prop, fn, obj) => fn(prop(propName, obj), propName, obj)) as PropApply;
