import curryN from '../function/curryN';

interface Merge {
    <T1, T2>(a: T1, b: T2): T1 & T2;
    <T1>(a: T1): <T2>(b: T2) => T1 & T2;
}

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
export default curryN(2, (...sources) =>
    Object.assign({}, ...sources)
) as Merge;
