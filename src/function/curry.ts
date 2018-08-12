import {
  curry, CurriedTypeGuard6, CurriedTypeGuard5, CurriedTypeGuard4, CurriedTypeGuard3, CurriedTypeGuard2,
  CurriedFunction6, CurriedFunction5, CurriedFunction4, CurriedFunction3, CurriedFunction2,
} from 'ramda';
import curryN from './curryN';

/**
 * Returns a curried equivalent of the provided function. The arguments of curried function
 * needn't be provided one at a time. If `f` is a ternary function and `g` is `curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @example
 *
 *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      var curriedAddFourNumbers = curry(addFourNumbers);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
export default (
  fn => curryN(fn.length, fn)
) as typeof curry
