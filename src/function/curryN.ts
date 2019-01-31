interface CurryN {
    (length: number, fn: (...args: any[]) => any): (...a: any[]) => any;
}

/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. If `g` is `curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * @param {Number} arity The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @example
 *
 *      var sumArgs = (...args) => sum(args);
 *
 *      var curriedAddFourNumbers = curryN(4, sumArgs);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
export default ((arity, fn) =>
    function curried(...args) {
        if (args.length >= arity) {
            return fn.apply(this, args);
        }

        return function(...newArgs) {
            return curried.apply(this, args.concat(newArgs));
        };
    }) as CurryN;
