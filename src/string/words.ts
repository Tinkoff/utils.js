const camelCaseRegex = /([a-z])([A-Z])/g;
const nonCharRegex = /[^a-zA-Z]+/g;

/**
 * Splits string into an array of its words.
 *
 * This function supports only latin chars.
 *
 * @param {String} str The string to split.
 * @return {String[]} String' words.
 * @example
 *
 *      words('fooBarZoo');   //=> ['foo', 'Bar', 'Zoo']
 *      words('foo_bar_zoo'); //=> ['foo', 'bar', 'zoo']
 *      words('foo-bar-zoo'); //=> ['foo', 'bar', 'zoo']
 *      words('foo bar zoo'); //=> ['foo', 'bar', 'zoo']
 *      words('fooBär');      //=> ['foo', 'B', 'r'] only latin chars are supported
 */
export default function words(str: string): string[] {
    return str.replace(camelCaseRegex, (_, char1: string, char2: string) => `${char1} ${char2}`).split(nonCharRegex);
}
