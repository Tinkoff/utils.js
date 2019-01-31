/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      identity(1); //=> 1
 *
 *      const obj = {};
 *      identity(obj) === obj; //=> true
 */
export default (x) => x;
