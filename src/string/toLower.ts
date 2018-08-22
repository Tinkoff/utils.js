import { toLower } from '../typings/types';
/**
 * Returns the lower case version of a string.
 *
 * @param {String} str The string to lower case.
 * @return {String} The lower case version of `str`.
 * @example
 *
 *      toLower('XYZ'); //=> 'xyz'
 */
export default (
    (str = '') => str.toLowerCase()
) as typeof toLower
