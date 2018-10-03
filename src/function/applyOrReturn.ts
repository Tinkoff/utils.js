import curryN from './curryN';
import { applyOrReturn } from '../typings/types';

/**
 * If `test` is function it calls with applied first argument, otherwise just returns `test`
 *
 * @param {Array} args Arguments passed to `test` if it's a function
 * @param {*} test if `test` is function it's called with `args`
 * @return {*}
 * @example
 *
 *      applyOrReturn([1,2,3], (...args) => args) // => [1,2,3]
 *      applyOrReturn([1,2,3], 'test') // => 'test'
 */
export default curryN(2, (args, test) => {
    if (typeof test === 'function') {
        return test(...args);
    }

    return test;
}) as typeof applyOrReturn;

