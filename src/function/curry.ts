import curryN from './curryN';
import {
    Func,
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

interface Curry {
    // <T1, TResult extends T1>(fn: (a: T1) => a is TResult): (a: T1) => a is T1;
    // <T1, T2, TResult extends T2>(fn: (a: T1, b: T2) => b is TResult): CurriedTypeGuard2<T1, T2, TResult>;
    // <T1, T2, T3, TResult extends T3>(fn: (a: T1, b: T2, c: T3) => c is TResult): CurriedTypeGuard3<T1, T2, T3, TResult>;
    // <T1, T2, T3, T4, TResult extends T4>(fn: (a: T1, b: T2, c: T3, d: T4) => d is TResult): CurriedTypeGuard4<
    //     T1,
    //     T2,
    //     T3,
    //     T4,
    //     TResult
    // >;
    // <T1, T2, T3, T4, T5, TResult extends T5>(
    //     fn: (a: T1, b: T2, c: T3, d: T4, e: T5) => e is TResult
    // ): CurriedTypeGuard5<T1, T2, T3, T4, T5, TResult>;
    // <T1, T2, T3, T4, T5, T6, TResult extends T6>(
    //     fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6) => f is TResult
    // ): CurriedTypeGuard6<T1, T2, T3, T4, T5, T6, TResult>;

    <TResult>(fn: () => TResult): () => TResult;
    <T1, TResult>(fn: (a: T1) => TResult): (a: T1) => TResult;
    <T1, T2, TResult>(fn: (a: T1, b: T2) => TResult): CurriedFunction2<T1, T2, TResult>;
    <T1, T2, T3, TResult>(fn: (a: T1, b: T2, c: T3) => TResult): CurriedFunction3<T1, T2, T3, TResult>;
    <T1, T2, T3, T4, TResult>(fn: (a: T1, b: T2, c: T3, d: T4) => TResult): CurriedFunction4<T1, T2, T3, T4, TResult>;
    <T1, T2, T3, T4, T5, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5) => TResult): CurriedFunction5<
        T1,
        T2,
        T3,
        T4,
        T5,
        TResult
    >;
    <T1, T2, T3, T4, T5, T6, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6) => TResult): CurriedFunction6<
        T1,
        T2,
        T3,
        T4,
        T5,
        T6,
        TResult
    >;

    (fn: (...a: any[]) => any): (...a: any[]) => any;
}

/**
 * Returns a curried equivalent of the provided function. The arguments of curried function
 * needn't be provided one at a time. If `f` is a ternary function and `g` is `curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @example
 *
 *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      var curriedAddFourNumbers = curry(addFourNumbers);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
export default ((fn: Func) => curryN(fn.length, fn)) as Curry;
