import { prop } from '../typings/types';
import curryN from '../function/curryN';
/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @param {String} prop The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 *
 * @example
 *
 *      prop('x', {x: 100}); //=> 100
 *      prop('x', {}); //=> undefined
 */
export default curryN(2, (prop, obj) =>
    obj != null ? obj[prop] : undefined
) as typeof prop
