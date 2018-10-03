/**
 * Checks if `test` is `undefined`.
 *
 * @param {*} test The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * isUndefined(void 0); // => true
 * isUndefined(null);// => false
 */
export default (
  test => typeof test === 'undefined'
) as (arg) => arg is undefined;
