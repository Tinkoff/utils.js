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
export default fn => x => typeof x === 'undefined' || fn(x);
