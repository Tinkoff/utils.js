interface Complement {
    <F extends (...args) => any>(pred: F): (...args: Parameters<F>) => boolean;
}

/**
 * Takes a function `f` and returns a function `g` such that if called with the same arguments
 * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
 *
 * @param {Function} fn
 * @return {Function}
 * @example
 *
 *      var isNotNil = complement(isNil);
 *      isNil(null); //=> true
 *      isNotNil(null); //=> false
 *      isNil(7); //=> false
 *      isNotNil(7); //=> true
 */
export default (<F extends Function>(fn: F) => (...args) => !fn(...args)) as Complement;
