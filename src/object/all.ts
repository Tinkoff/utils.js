import { all } from 'ramda';
import curryN from '../function/curryN';

/**
 * Tests whether every [key, value] pair in the object passes the test implemented by the provided function.
 *
 * @param {Function} fn The function to test for each [key, value] pair. Takes a predicate and an object.
 * @param {Object} obj The object whose enumerable own property [key, value] pairs are to be tested.
 * @return {Boolean} Returns `true` if the callback function returns a truthy value for every [key, value] pair, otherwise, false.
 * @example
 *
 *      var isBiggerThanZero = x => x > 0;
 *
 *      all(isBiggerThanZero, {}); //=> true
 *      all(isBiggerThanZero, { a: 1 }); //=> true
 *      all(isBiggerThanZero, { a: 1, b: 1, c: 1 }); //=> true
 *      all(isBiggerThanZero, { a: 0, b: 1, c: 0 }); //=> false
 *      all(isBiggerThanZero, { a: 1, b: 0, c: 1 }); //=> false
 *      all(isBiggerThanZero)({ a: 0, b: 0, c: 0 }); //=> false
 *      all(isBiggerThanZero)({ a: 1, b: 0, c: 1 }); //=> false
 */
export default curryN(2, (fn, obj = {}) => {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && !fn(obj[key], key, obj)) {
            return false;
        }
    }
    return true;
}) as typeof all
