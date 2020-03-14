import curryN from '../function/curryN';
import isObject from '../is/object';
import isArray from '../is/array';
import isNumber from '../is/number';
import has from './has';
import assign from '../assign';
import { Paths, Prop, ReplaceType } from '../typings/types';

interface PathSet {
    <K extends Prop, V, O>(path: [K], value: V, obj: O): ReplaceType<O, K, V>;
    <K extends Prop, V>(path: [K], value: V): <O>(obj: O) => ReplaceType<O, K, V>;
    <K extends Prop>(path: [K]): {
        <V, O>(value: V, obj: O): ReplaceType<O, K, V>;
        <V>(value: V): <O>(obj: O) => ReplaceType<O, K, V>;
    };
    <O>(path: Paths, value, obj: O): O;
    (path: Paths, value): <O>(obj: O) => O;
    (path: Paths): {
        <O>(value, obj: O): O;
        (value): <O>(obj: O) => O;
    };
}

/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given paths to the given value.
 *
 * **Note:** If property in the object is equal to value by reference then function
 * just returns object without changes
 *
 * @param {[String]} paths
 * @param {*} value
 * @param {Object} obj
 * @return {Object}
 * @example
 *
 *      pathSet(['a', 'b'], 3, {}) // => { a: { b: 3 } }
 */
export default curryN(3, (paths: Paths = [], value, obj = {}) => {
    const n = paths.length - 1;
    const result = assign(obj);
    const key = paths[n];
    let val = result;
    let v;

    for (let i = 0; i < n; i++) {
        v = val[paths[i]];
        if (isObject(v) || isArray(v)) {
            v = assign(v);
        } else {
            v = isNumber(paths[i + 1]) ? [] : {};
        }

        val[paths[i]] = v;
        val = v;
    }

    if (has(key, val) && val[key] === value) {
        return obj;
    }

    val[key] = value;

    return result;
}) as PathSet;
