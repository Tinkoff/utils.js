/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * @param {*} x The value to wrap in a function
 * @return {Function}
 * @example
 *
 *      var t = always('Tee');
 *      t(); //=> 'Tee'
 */
export default x => () => x;
