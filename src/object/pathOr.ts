import curryN from '../function/curryN';
import path from './path';
import { CurriedFunction2, Paths, Prop } from '../typings/types';

interface PathOr {
    <K extends Prop, V, O extends Record<K, any>>(path: [K], value: V, obj: O): O[K];
    <K extends Prop, V>(path: [K], value: V, obj): V;
    <K extends Prop, V>(path: [K], value: V): {
        <O extends Record<K, any>>(obj: O): O[K];
        (obj): V;
    };
    <K extends Prop>(path: [K]): {
        <V, O extends Record<K, any>>(value: V, obj: O): O[K];
        <V>(value: V, obj): V;
        <V>(value: V): {
            <O extends Record<K, any>>(obj: O): O[K];
            (obj): V;
        };
    };
    (path: Paths, value, obj): any;
    (path: Paths, value): (obj) => any;
    (path: Paths): CurriedFunction2<any, any, any>;
}

/**
 * If the given, non-null object has a value at the given path, returns the
 * value at that path. Otherwise returns the provided default value.
 *
 * @param {[String]} paths The path to use.
 * @param {*} value The default value.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 *      pathOr(['a', 'b'],'N/A', {a: {b: 2}}); //=> 2
 *      pathOr(['a', 'b'], 'N/A', {c: {b: 2}}); //=> "N/A"
 */
export default curryN(3, (paths: Paths = [], value, obj = {}) => {
    const v = path(paths, obj);

    return v != null ? v : value;
}) as PathOr;
