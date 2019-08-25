import curryN from './curryN';

interface Tap {
    <T>(fn: (a: T) => any, value: T): T;
    <T>(fn: (a: T) => any): (value: T) => T;
}

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
export default curryN(2, <T>(fn: (a: T) => any, x: T) => {
    fn(x);
    return x;
}) as Tap;
