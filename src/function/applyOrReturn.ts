import curryN from './curryN';

interface ApplyOrReturn {
    <TFunc, T>(args, func: T): T extends (...args) => any ? ReturnType<T> : T;
    (args): <TFunc, T>(
        func: T
    ) => T extends (...args) => any ? ReturnType<T> : T;
}

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
}) as ApplyOrReturn;
