import curryN from './curryN';

interface Flip {
    <T, U, R>(fn: (arg0: T, arg1: U, ...args) => R): (arg1: U, arg0: T, ...args) => R;
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
export default (<T, U, R>(fn: (a: T, b: U) => R) =>
    curryN(2, function(a: U, b: T) {
        const args = Array.prototype.slice.call(arguments);
        args[0] = b;
        args[1] = a;

        return fn.apply(this, args);
    })) as Flip;
