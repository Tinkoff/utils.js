import { Paths, Prop } from '../typings/types';
import curryN from '../function/curryN';
import path from './path';

interface PathApply {
    <K extends Prop, O extends Record<K, any>, R>(path: [K], fn: (x: O[K]) => R, obj: O): R;
    <K extends Prop, R>(path: [K], fn: (x) => R): (obj) => R;
    <K extends Prop>(path: [K]): {
        <R>(fn: (x) => R, obj): R;
        <R>(fn: (x) => R): (obj) => R;
    };
    <R>(path: Paths, fn: (x) => R, obj): R | undefined;
    <R>(path: Paths, fn: (x) => R): (obj) => R | undefined;
    (path: Paths): {
        <R>(fn: (x) => R, obj): R | undefined;
        <R>(fn: (x) => R): (obj) => R | undefined;
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
export default curryN(3, <R>(paths: Paths = [], fn: (x) => R, obj = {}) => fn(path(paths, obj))) as PathApply;
