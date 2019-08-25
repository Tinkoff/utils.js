import isNumber from './number';
/**
 * Checks if `test` is finite.
 *
 * @param {*} test The value to check.
 * @returns {boolean} Returns `true` if `test` is finite, else `false`.
 * @example
 *
 * isFinite(5); // => true
 * isFinite(null); // => false
 */
export default (test): test is number => isNumber(test) && isFinite(test);
