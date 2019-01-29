/**
 * Checks if `test` is object.
 *
 * @param {*} test The value to check.
 * @returns {boolean} Returns `true` if `test` is object, else `false`.
 * @example
 *
 * isObject({ a: 'test' }); // => true
 * isObject(null); // => false
 */
export default (test: any): test is object =>
    test !== null && typeof test === 'object';
