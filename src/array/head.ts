import { head } from '../typings/types';
/**
 * Returns the first element of the given array.
 *
 * @param {Array} arr
 * @return {*}
 * @example
 *
 *      head(['fi', 'fo', 'fum']); //=> 'fi'
 *      head([]); //=> undefined
 */
export default (
    arr => arr && arr[0]
) as typeof head
