import { tail } from 'ramda';
/**
 * Returns all but the first element of the given array.
 *
 * @param {Array} arr
 * @return {*}
 * @example
 *
 *      tail(['fi', 'fo', 'fum']); //=> ['fo', 'fum']
 *      tail([]); //=> []
 */
export default arr => arr.slice(1) as typeof tail
