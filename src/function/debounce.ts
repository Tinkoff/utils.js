import curryN from './curryN';

interface Debounce {
    <TFunc>(wait: number, fn: TFunc): Function & { cancel: Function };
    (wait: number): <TFunc>(fn: TFunc) => Function & { cancel: Function };
}

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. Delayed function invocation might be cancelled by calling cancel method.
 *
 * @param {number} wait The number of milliseconds to delay.
 * @param {Function} fn The function to debounce.
 * @returns {Function} Returns the new debounced function.
 */
export default curryN(2, (wait, fn) => {
    let timeout;

    function f() {
        let args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(
            () => fn.apply(this, args), // eslint-disable-line prefer-rest-params
            wait
        );
    }

    (f as any).cancel = () => clearTimeout(timeout);

    return f;
}) as Debounce;
