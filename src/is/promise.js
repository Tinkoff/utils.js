import isObject from './object';
import isFunction from './function';

/**
 * Checks if `test` is Promise.
 *
 * @param {*} test The value to check.
 * @returns {boolean} Returns `true` if `test` is Promise, else `false`.
 * @example
 *
 *      isPromise({}) // => false
 *      isPromise(Promise.resolve()) // => true
 */
export default test => (isObject(test) || isFunction(test)) && isFunction(test.then);
