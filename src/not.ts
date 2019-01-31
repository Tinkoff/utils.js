/**
 * A function that returns the `!` of its argument. It will return `true` when
 * passed false-y value, and `false` when passed a truth-y one.
 *
 * @param {*} val any value
 * @return {Boolean} the logical inverse of passed argument.
 * @example
 *
 *      not(true); //=> false
 *      not(false); //=> true
 *      not(0); //=> true
 *      not(1); //=> false
 */
export default (val) => !val;
