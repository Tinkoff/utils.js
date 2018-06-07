import curryN from '../function/curryN';

/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {Array | String} list
 * @return {Array | String}
 * @example
 *
 *      slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 */

export default curryN(3, (fromIndex, toIndex, list = []) => list.slice(fromIndex, toIndex));
