import words from './words';

/**
 * Converts string to kebab case.
 *
 * This function convert only latin chars.
 * The preferred purpose is to generate file or class names in your code generation tools.
 *
 * @param {String} str The string to convert.
 * @return {String} The kebab cased string.
 * @example
 *
 *      kebabCase('Foo Bar'); //=> 'foo-bar'
 *      kebabCase('fooBar');  //=> 'foo-bar'
 *      kebabCase('foo_bar'); //=> 'foo-bar'
 *      kebabCase('FOO_BAR'); //=> 'foo-bar'
 *      kebabCase('Foo Bär'); //=> 'foo-b-r' — only latin chars are supported
 */
export default function kebabCaseName(str: string): string {
    return words(str)
        .map((word) => word.toLowerCase())
        .join('-');
}
