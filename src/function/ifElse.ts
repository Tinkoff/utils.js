import { Func } from '../typings/types';
import curryN from './curryN';

interface IfElse {
    <T, F>(condition: Func<boolean>, onTrue: Func<T>, onFalse: Func<F>): T | F;
    <T>(condition: Func<boolean>, onTrue: Func<T>): <F>(onFalse: Func<F>) => T | F;
    (condition: Func<boolean>): <T, F>(onTrue: Func<T>, onFalse: Func<F>) => T | F;
    (condition: Func): <T>(onTrue: Func<T>) => <F>(onFalse: Func<F>) => T | F;
}

/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 *
 * @param {Function} condition A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
 * @return {Function} A new unary function that will process either the `onTrue` or the `onFalse`
 *                    function depending upon the result of the `condition` predicate.
 * @example
 *
 *      const prop = ifElse(
 *        x => x.a,
 *        x => x.b,
 *        x => x.c
 *      );
 *      prop({ a: false, c: 2 }); //=> 2
 *      prop({ a: true, b: 1, c: 2 }); //=> 1
 */
export default curryN(3, (condition, onTrue, onFalse) => (...args) =>
    condition(...args) ? onTrue(...args) : onFalse(...args)
) as IfElse;
