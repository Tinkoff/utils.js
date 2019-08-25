import {
    CurriedFunction2,
    CurriedFunction3,
    CurriedFunction4,
    CurriedFunction5,
    CurriedFunction6,
    CurriedTypeGuard2,
    CurriedTypeGuard3,
    CurriedTypeGuard4,
    CurriedTypeGuard5,
    CurriedTypeGuard6,
} from '../typings/types';

interface CurryN {
    <T1, TResult extends T1>(n: 1, fn: (a: T1) => a is TResult): (a: T1) => a is T1;
    <T1, T2, TResult extends T2>(n: 2, fn: (a: T1, b: T2) => b is TResult): CurriedTypeGuard2<T1, T2, TResult>;
    <T1, T2, T3, TResult extends T3>(n: 3, fn: (a: T1, b: T2, c: T3) => c is TResult): CurriedTypeGuard3<
        T1,
        T2,
        T3,
        TResult
    >;
    <T1, T2, T3, T4, TResult extends T4>(n: 4, fn: (a: T1, b: T2, c: T3, d: T4) => d is TResult): CurriedTypeGuard4<
        T1,
        T2,
        T3,
        T4,
        TResult
    >;
    <T1, T2, T3, T4, T5, TResult extends T5>(
        n: 5,
        fn: (a: T1, b: T2, c: T3, d: T4, e: T5) => e is TResult
    ): CurriedTypeGuard5<T1, T2, T3, T4, T5, TResult>;
    <T1, T2, T3, T4, T5, T6, TResult extends T6>(
        n: 6,
        fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6) => f is TResult
    ): CurriedTypeGuard6<T1, T2, T3, T4, T5, T6, TResult>;

    <T1, TResult>(n: 1, fn: (a: T1) => TResult): (a: T1) => TResult;
    <T1, T2, TResult>(n: 2, fn: (a: T1, b: T2) => TResult): CurriedFunction2<T1, T2, TResult>;
    <T1, T2, T3, TResult>(n: 3, fn: (a: T1, b: T2, c: T3) => TResult): CurriedFunction3<T1, T2, T3, TResult>;
    <T1, T2, T3, T4, TResult>(n: 4, fn: (a: T1, b: T2, c: T3, d: T4) => TResult): CurriedFunction4<
        T1,
        T2,
        T3,
        T4,
        TResult
    >;
    <T1, T2, T3, T4, T5, TResult>(n: 5, fn: (a: T1, b: T2, c: T3, d: T4, e: T5) => TResult): CurriedFunction5<
        T1,
        T2,
        T3,
        T4,
        T5,
        TResult
    >;
    <T1, T2, T3, T4, T5, T6, TResult>(
        n: 6,
        fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6) => TResult
    ): CurriedFunction6<T1, T2, T3, T4, T5, T6, TResult>;

    (n: number, fn: (...a: any[]) => any): (...a: any[]) => any;
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
export default ((arity: number, fn: Function) =>
    function curried(...args) {
        if (args.length >= arity) {
            return fn.apply(this, args);
        }

        return function(...newArgs) {
            return curried.apply(this, args.concat(newArgs));
        };
    }) as CurryN;
