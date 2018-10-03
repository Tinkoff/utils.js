import { either } from '../typings/types';
import curryN from './curryN';

/**
 * A function wrapping calls to the two functions in an `||` operation,
 * returning the result of the first function if it is truth-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * truth-y value.
 *
 * @param {Function} f a predicate
 * @param {Function} g another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
 * @example
 *
 *      var gt10 = x => x > 10;
 *      var even = x => x % 2 === 0;
 *      var f = either(gt10, even);
 *      f(101); //=> true
 *      f(8); //=> true
 *      f(3); //=> false
 */
export default curryN(2, (f, g) =>
    (...args) => f(...args) || g(...args)
) as typeof either
