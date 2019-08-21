import { Paths, Prop, ObjBase } from '../typings/types';
import curryN from '../function/curryN';
import path from './path';

interface PathApply {
    <K extends Prop, O extends Record<K, any>, R>(path: [K], fn: ObjBase<K, O[K], R>, obj: O): R;
    <K extends Prop, V, R>(path: [K], fn: ObjBase<K, V, R>): (obj) => R;
    <K extends Prop>(path: [K]): {
        <O extends Record<K, any>, R>(fn: ObjBase<K, O[K], R>, obj: O): R;
        <V, R>(fn: ObjBase<K, V, R>): (obj) => R;
    };
    <V, R>(path: Paths, fn: ObjBase<Paths, V, R>, obj): R;
    <V, R>(path: Paths, fn: ObjBase<Paths, V, R>): (obj) => R;
    (path: Paths): {
        <V, R>(fn: ObjBase<Paths, V, R>, obj): R;
        <V, R>(fn: ObjBase<Paths, V, R>): (obj) => R;
    };
}

/**
 * Returns the result of `fn` with given value at `path`.
 *
 * @param {[String]} paths The path to use.
 * @param {Function} fn function to apply
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} result of calling fn with nested property.
 *
 * @example
 *
 *      pathApply(['a', 'b'], x => 'is ' + x, {a: {b: 2}}); //=> is 2
 *      pathApply(['a', 'b'], x => x > 0, {a: {b: 2}}); //=> true
 */
export default curryN(3, <R>(paths: Paths = [], fn: ObjBase<Paths, any, any>, obj = {}) =>
    fn(path(paths, obj), paths, obj)
) as PathApply;
