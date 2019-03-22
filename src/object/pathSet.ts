import curryN from '../function/curryN';
import isObject from '../is/object';
import { Paths, Prop } from '../typings/types';

interface PathSet {
    <K extends Prop, V, O>(path: [K], value: V, obj: O): O & Record<K, V>;
    <K extends Prop, V>(path: [K], value: V): <O>(obj: O) => O & Record<K, V>;
    <K extends Prop>(path: [K]): {
        <V, O>(value: V, obj: O): O & Record<K, V>;
        <V>(value: V): <O>(obj: O) => O & Record<K, V>;
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
    const result = Object.assign({}, obj);
    let val = result;
    let v;

    for (let i = 0; i < n; i++) {
        v = val[paths[i]];
        if (isObject(v)) {
            v = Object.assign({}, v);
        } else {
            v = {};
        }

        val[paths[i]] = v;
        val = v;
    }
    val[paths[n]] = value;

    return result;
}) as PathSet;
