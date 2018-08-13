import curryN from '../function/curryN';

/**
 * Applies `fn` to each of the `obj` values, and returns new object.
 *
 * @param {Function} fn The function to be called on every value of the input `obj`. Receives three argument, `value`, `key`, `obj`.
 * @param {Object} obj The object to be iterated over.
 * @return {Object} The new object.
 * @example
 *
 *      var double = x => x * 2;
 *
 *      map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 */
export default curryN(2, (fn, obj = {}) => {
    const result = {};

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = fn(obj[key], key, obj);
        }
    }

    return result;
}) as map

interface map {
    <TKey extends keyof TObj, TValue, TObj>(
        fn: (value: TObj[TKey], key: TKey, obj: TObj) => TValue,
        obj: TObj
    ): Record<TKey, TValue>;
    <TKey extends keyof TObj, TValue, TObj>(fn: (value: TObj[TKey], key: TKey, obj: TObj) => TValue):
        (obj: TObj) => Record<TKey, TValue>;
}