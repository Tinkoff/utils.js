import curryN from '../function/curryN';

interface Optional {
    <T, F>(fn: (x: T) => F, x: T): F | true;
    <T, F>(fn: (x: T) => F): (x: T) => F | true;
}

/**
 * Wraps a one-parameter function,
 * new function returns true if passed parameter is undefined, otherwise returns result of calling `fn`
 *
 * @param {Function} fn function to wrap
 * @returns {Function}
 * @example
 *
 *      const optIsString = optional(isString);
 *      optIsString() // => true
 *      optIsString({}) // => false
 *      optIsString('str') // => true
 */
export default curryN(2, <T>(fn: (x: T) => any, x: T) => typeof x === 'undefined' || fn(x)) as Optional;
