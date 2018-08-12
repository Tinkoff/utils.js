import { eqProps } from 'ramda';
import curryN from '../function/curryN';

/**
 * Reports whether two objects have the same value, in equal
 * terms, for the specified property. Useful as a curried predicate.
 *
 * @param {String} prop The name of the property to compare
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Boolean}
 *
 * @example
 *
 *      var o1 = { a: 1, b: 2, c: 3, d: 4 };
 *      var o2 = { a: 10, b: 20, c: 3, d: 40 };
 *      eqProps('a', o1, o2); //=> false
 *      eqProps('c', o1, o2); //=> true
 */
export default curryN(3, (prop, obj1, obj2) => {
    return obj1 != null && obj2 != null ? obj1[prop] === obj2[prop] : undefined;
}) as typeof eqProps
