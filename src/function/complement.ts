import { complement } from 'ramda';
/**
 * Takes a function `f` and returns a function `g` such that if called with the same arguments
 * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
 *
 * @param {Function} fn
 * @return {Function}
 * @example
 *
 *      var isNotNil = omplement(isNil);
 *      isNil(null); //=> true
 *      isNotNil(null); //=> false
 *      isNil(7); //=> false
 *      isNotNil(7); //=> true
 */
export default (fn =>
    (...args) => !fn(...args)
) as typeof complement;
