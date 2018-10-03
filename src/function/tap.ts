import { tap } from '../typings/types';
import curryN from './curryN';

/**
 * Runs the given function with the supplied argument, then returns the argument.
 *
 * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
 * @param {*} x
 * @return {*} `x`.
 * @example
 *
 *      var sayX = x => console.log('x is ' + x);
 *      tap(sayX, 100); //=> 100
 *      // logs 'x is 100'
 */
export default curryN(2, (fn, x) => {
    fn(x);
    return x;
}) as typeof tap
