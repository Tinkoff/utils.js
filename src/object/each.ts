import curryN from '../function/curryN';

interface EachObj {
    <T>(fn: (value: T[keyof T], key: keyof T, obj: T) => void, obj: T): T;
    <T>(fn: (value: T[keyof T], key: keyof T, obj: T) => void): (obj: T) => T;
}

/**
 * Iterate over an input `object`, calling a provided function `fn` for each
 * key and value in the object.
 *
 * @param {Function} fn The function to invoke. Receives three argument, `value`, `key`, `obj`.
 * @param {Object} obj The object to iterate over.
 * @return {Object} The original object.
 * @example
 *
 *      var printKeyConcatValue = (value, key) => console.log(key + ':' + value);
 *      each(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
 *      // logs x:1
 *      // logs y:2
 */
export default curryN(2, (fn, obj = {}) => {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn(obj[key], key, obj);
        }
    }
}) as EachObj;
