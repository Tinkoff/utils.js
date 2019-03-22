/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values.
 *
 * @param {*} val The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * toString(null); // => ''
 *
 * toString('test'); // => 'test'
 *
 * toString([1, 2, 3]); => '1,2,3'
 */
export default (val) => {
    if (val == null) {
        return '';
    }

    return `${val}`;
};
