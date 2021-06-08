import words from './words';
import upperFirst from './upperFirst';

/**
 * Converts string to camel case.
 *
 * This function convert only latin chars.
 * The preferred purpose is to generate file or class names in your code generation tools.
 *
 * @param {String} str The string to convert.
 * @return {String} The camel cased string.
 * @example
 *
 *      camelCase('Foo Bar'); //=> 'fooBar'
 *      camelCase('foo-bar'); //=> 'fooBar'
 *      camelCase('foo_bar'); //=> 'fooBar'
 *      camelCase('FOO_BAR'); //=> 'fooBar'
 *      camelCase('fooBar');  //=> 'fooBar'
 *      camelCase('Foo Bär'); //=> 'fooBR' only latin chars are supported
 */
export default function camelCaseName(str: string): string {
    return words(str)
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }

            return upperFirst(word.toLowerCase());
        })
        .join('');
}
