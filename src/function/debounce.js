import curryN from './curryN';

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
        clearTimeout(timeout);
        timeout = setTimeout(
            () => fn.apply(this, arguments),  // eslint-disable-line prefer-rest-params
            wait
        );
    }

    f.cancel = () => clearTimeout(timeout);

    return f;
});
