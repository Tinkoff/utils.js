import { trim } from 'ramda';
/**
 * Removes leading and trailing whitespace from `str`.
 *
 * @param {String} str The string to trim.
 * @returns {String} Returns the trimmed string.
 * @example
 *
 * trim('  abc  '); // => 'abc'
 *
 */
export default (
  (str = '') => str.toString().trim() || ''
) as typeof trim
