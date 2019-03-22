import curryN from '../function/curryN';

interface Template {
    (replacements: Record<string, string>, str?: string): string;
    (replacements: Record<string, string>): (str?: string) => string;
}

/**
 * Replaces string keywords with provided values
 *
 * @param {Object} replacements object with keywords and corresponding replacements
 * @param {String} str string with keywords in a correct format '%{keyword}'
 * @return {String} String with replaced keywords
 * @example
 *
 *      template({ fruit: 'banana' }, 'Petya has a %{fruit}') // => Petya has a banana
 */
export default curryN(2, (replacements = {}, str: string = '') =>
    str.replace(/%\{.+?\}/g, (match) => {
        const replacementKey = match.replace(/\W/g, '');

        return replacements[replacementKey];
    })
) as Template;
