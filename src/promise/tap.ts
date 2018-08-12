import curryN from '../function/curryN';

/**
 * Runs the given promise with the supplied argument. Returns the argument, when promise is resolved.
 *
 * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
 * @param {*} x
 * @return {*} `x`.
 * @example
 *
 *      var sayX = x => console.log('x is ' + x);
 *      Promise.resolve(5).then(promiseTap(sayX));
 *      // logs 'x is 5'
 */
export default curryN(2, (fn, x) => Promise.resolve().then(() => fn(x)).then(() => x)) as tap

interface tap {
  <T>(fn: (a: T) => any, value: T): Promise<T>;
  <T>(fn: (a: T) => any): (value: T) => Promise<T>;
}

