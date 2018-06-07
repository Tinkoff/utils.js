import curryN from '../function/curryN';
import isObject from '../is/object';

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
export default curryN(3, (paths = [], value, obj = {}) => {
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
});
