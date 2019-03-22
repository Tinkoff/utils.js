import curryN from './curryN';
import { Pred } from '../typings/types';

interface Both {
    <T>(pred1: Pred<T>, pred2: Pred<T>): Pred<T>;
    <T>(pred1: Pred<T>): (pred2: Pred<T>) => Pred<T>;
}

/**
 * A function wrapping calls to the two functions in an `&&` operation,
 * returning the result of the first function if it is false-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * false-y value.
 *
 * @param {Function} f a predicate
 * @param {Function} g another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
 * @example
 *
 *      var gt10 = x => x > 10;
 *      var even = x => x % 2 === 0;
 *      var f = both(gt10, even);
 *      f(100); //=> true
 *      f(101); //=> false
 */
export default curryN(2, <T>(f: Pred<T>, g: Pred<T>) => (...args) => f(...args) && g(...args)) as Both;
