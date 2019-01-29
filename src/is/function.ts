/**
 * Checks if `test` is function.
 *
 * @param {*} test The value to check.
 * @returns {boolean} Returns `true` if `test` is function, else `false`.
 * @example
 *
 * isFunction(() => {}); // => true
 * isFunction(null); // => false
 */
export default (test: any): test is Function => typeof test === 'function';
