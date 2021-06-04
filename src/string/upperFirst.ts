/**
 * Converts the first character of string to upper case and returns the new string.
 *
 * @param {String} str The string to convert.
 * @return {String} The converted string.
 * @example
 *
 *      upperFirst('foo');  //=> 'Foo'
 *      upperFirst('über'); //=> 'Über'
 *      upperFirst('FOO');  //=> 'FOO'
 */
function upperFirst(str: string): string {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

export default upperFirst;
