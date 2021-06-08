import words from './words';

/**
 * Returns the snake case version of a string.
 *
 * This function convert only latin chars.
 * The preferred purpose is to generate file or class names in your code generation tools.
 *
 * @param {String} str The string to switch to snake case.
 * @return {String} The snake case version of `str`.
 * @example
 *
 *      snakeCaseName('Foo Bar'); //=> 'foo_bar'
 *      snakeCaseName('fooBar');  //=> 'foo_bar'
 *      snakeCaseName('foo-bar'); //=> 'foo_bar'
 *      snakeCaseName('FOO-BAR'); //=> 'foo_bar'
 *      snakeCaseName('Foo Bär'); //=> 'foo_b_r' only latin chars are supported
 */
export default function snakeCaseName(str: string): string {
    return words(str)
        .join('_')
        .toLowerCase();
}
