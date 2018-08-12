import { objOf } from 'ramda';
import curryN from '../function/curryN';

/**
 * Creates an object containing a single key:value pair.
 *
 * @param {String} key
 * @param {*} value
 * @return {Object}
 * @example
 *
 *      objOf('key', 5) // => { key: 5 }
 */
export default curryN(2, (key, value) => ({ [key]: value })) as typeof objOf
