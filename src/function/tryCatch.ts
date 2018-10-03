import { tryCatch } from '../typings/types';
import curryN from './curryN';

/**
 * Takes two functions, tryer and catcher.
 *
 * Returns a function that, when invoked with zero or more parameters,
 * calls the tryer with those parameters, and if tryer throws,
 * calls the catcher with the error as first argument and original arguments as rest.
 * If that still throws, then ¯\_(ツ)_/¯
 *
 * @param {Function} tryer
 * @param {Function} catcher
 * @return {Function}
 * @example
 *      tryCatch(x => x.length, () => 0)([ 1, 2, 3 ]) // 3
 *      tryCatch(x => x.length, () => 0)( undefined ) // 0
 *      tryCatch(
 *          someDataTransform,
 *          (err, ...rest) => {
 *              logAsyncToServer('someDataTransform failed', err, 'with arguments', rest);
 *              return DEFAULT_VALUE;
 *          }
 *      )( someIncompleteData ) // DEFAULT_VALUE (error is logged somewhere)
 */
export default curryN(2, (tryer, catcher) => {
    return (...args) => {
        try {
            return tryer.apply(this, args);
        } catch (e) {
            args.unshift(e);
            return catcher.apply(this, args);
        }
    };
}) as typeof tryCatch
