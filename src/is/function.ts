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
export default (
    test => typeof test === 'function'
) as (arg) => arg is Function;
