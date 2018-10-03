import { flip } from '../typings/types';
import curryN from './curryN';
/**
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 * @example
 *
 *      const neg = (a, b) => a - b
 *
 *      flip(neg)(3, 5); //=> 2
 */
export default (
  fn => curryN(2, (a, b, ...args) => fn(b, a, ...args))
) as typeof flip
