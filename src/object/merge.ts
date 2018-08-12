import { merge } from 'ramda';
import curryN from '../function/curryN';

/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the others objects. If a key exists in several objects,
 * the value from the last object will be used.
 *
 * @param {...Object} sources
 * @return {Object}
 * @example
 *
 * merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 }); //=> { 'name': 'fred', 'age': 40 }
 */
export default curryN(2, (...sources) => Object.assign({}, ...sources)) as typeof merge
