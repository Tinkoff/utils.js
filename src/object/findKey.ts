import curryN from '../function/curryN';

/**
 * Returns first key in `obj` satisfied to `fn`, or undefined if there is no such keys
 *
 * @param {Function} fn Receives three argument, `value`, `key`, `obj`
 * @param {Object} obj
 * @returns {String|undefined}
 *
 * @example
 *
 *      findKey(identity, {a: 0, b: 3}) // => 'b'
 *      findKey(x => x > 3, { a: 2, b: 1 }) // => undefined
 *      findKey(x => x > 3, { a: 4, b: 5 }) // => 'a'
 */
export default curryN(2, (fn, obj = {}) => {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (fn(obj[key], key, obj)) {
                return key;
            }
        }
    }
}) as findKey

interface findKey {
    <T>(fn: (value: T, key: string, obj: Record<string, T>) => any, obj: Record<string, T>): string;
    <T>(fn: (value: T, key: string, obj: Record<string, T>) => any): (obj: Record<string, T>) => string;
}
