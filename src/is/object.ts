import isArray from './array';

/**
 * Checks if `test` is object.
 *
 * @param {*} test The value to check.
 * @returns {boolean} Returns `true` if `test` is object, else `false`.
 * @example
 *
 * isObject({ a: 'test' }); // => true
 * isObject(null); // => false
 * isObject([]); // => false
 */
export default (test): test is Record<any, any> => test !== null && !isArray(test) && typeof test === 'object';
