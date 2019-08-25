import curryN from '../function/curryN';
import isObject from '../is/object';
import isNumber from '../is/number';
import has from './has';
import assign from '../assign';
import { ObjBase, Paths, Prop, ReplaceType } from '../typings/types';

interface PathSetBy {
    <K extends Prop, O extends Record<any, any>, R>(path: [K], fn: ObjBase<K, O[K], R>, obj: O): ReplaceType<O, K, R>;
    <K extends Prop, V, R>(path: [K], fn: ObjBase<K, V, R>): <O>(obj: O) => ReplaceType<O, K, R>;
    <K extends Prop>(path: [K]): {
        <O extends Record<any, any>, R>(fn: ObjBase<K, O[K], R>, obj: O): ReplaceType<O, K, R>;
        <V, R>(fn: ObjBase<K, V, R>): <O>(obj: O) => ReplaceType<O, K, R>;
    };
    <O>(path: Paths, fn: ObjBase<Paths, any, any>, obj: O): O;
    (path: Paths, fn: ObjBase<Paths, any, any>): <O>(obj: O) => O;
    (path: Paths): {
        <O>(fn: ObjBase<Paths, any, any>, obj: O): O;
        (fn: ObjBase<Paths, any, any>): <O>(obj: O) => O;
    };
}

/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given paths to the result of `fn` call.
 *
 * **Note:** If property in the object is equal to value by reference then function
 * just returns object without changes
 *
 * @param {[String]} paths
 * @param {Function} fn
 * @param {Object} obj
 * @return {Object}
 * @example
 *
 *      pathSetBy(['a', 'b'], x => x+1, {a: { b:1 }}) // => { a: { b: 2 } }
 */
export default curryN(3, (paths: Paths = [], fn: ObjBase<Paths, any, any>, obj = {}) => {
    const n = paths.length - 1;
    const result = assign(obj);
    const key = paths[n];
    let val = result;
    let v;

    for (let i = 0; i < n; i++) {
        v = val[paths[i]];
        if (isObject(v)) {
            v = assign(v);
        } else {
            v = isNumber(paths[i + 1]) ? [] : {};
        }

        val[paths[i]] = v;
        val = v;
    }

    const res = fn(val[key], paths, obj);

    if (has(key, val) && val[key] === res) {
        return obj;
    }

    val[key] = res;

    return result;
}) as PathSetBy;
