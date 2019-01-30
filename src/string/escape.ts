const escapeRegExp = /[&<>"']/g;

const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
};
const escape = (char) => htmlEscapes[char];

/**
 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
 * corresponding HTML entities.
 *
 * @param {string} str The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * escape('fred, barney, & pebbles'); // => 'fred, barney, &amp; pebbles'
 */
export default (str = '') => str.replace(escapeRegExp, escape);
