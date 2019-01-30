/**
 * Checks if `test` is array.
 *
 * @param {*} test The value to check.
 * @returns {boolean} Returns `true` if `test` is array, else `false`.
 * @example
 *
 * isArray([]); // => true
 * isArray(null); // => false
 */
export default (test: any): test is Array<any> => !!test && Array.isArray(test);
