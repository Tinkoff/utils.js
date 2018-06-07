/**
 * Removes leading whitespace from `str`.
 *
 * @param {String} str The string to trim.
 * @returns {String} Returns the trimmed string.
 * @example
 *
 * trimLeft('  abc  '); // => 'abc   '
 *
 */
export default (str = '') => str.replace(/^[\s\uFEFF\xA0]+/g, '');
