import curryN from '../function/curryN';
import path from './path';

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
export default curryN(3, (paths = [], value, obj = {}) => {
    const v = path(paths, obj);

    return v != null ? v : value;
});
