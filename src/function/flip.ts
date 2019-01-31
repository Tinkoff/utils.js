import curryN from './curryN';

interface Flip {
    <T, U, TResult>(fn: (arg0: T, arg1: U) => TResult): (
        arg1: U,
        arg0?: T
    ) => TResult;
    <T, U, TResult>(fn: (arg0: T, arg1: U, ...args: any[]) => TResult): (
        arg1: U,
        arg0?: T,
        ...args: any[]
    ) => TResult;
}

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
export default ((fn) =>
    curryN(2, (a, b, ...args) => fn(b, a, ...args))) as Flip;
