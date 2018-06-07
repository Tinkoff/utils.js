import curryN from './function/curryN';

/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`
 * otherwise the first argument is returned.
 *
 * @param {a} dflt The default value.
 * @param {b} x The value to return if it is not null or undefined
 * @return {*} The the second value or the default value
 * @example
 *
 *      var defaultTo42 = defaultTo(42);
 *
 *      defaultTo42(null);  //=> 42
 *      defaultTo42(undefined);  //=> 42
 *      defaultTo42('Example');  //=> 'Example'
 *      defaultTo42(parseInt('string')); //=> 42
 */
export default curryN(2, (dflt, x) => {
    if (x == null || x !== x) { // eslint-disable-line no-self-compare
        return dflt;
    }

    return x;
});
