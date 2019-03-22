import curryN from './curryN';
import { Func } from '../typings/types';

interface DebounceFunc<T extends () => any> {
    (...args: Parameters<T>): void;
    cancel: Function;
}

interface Debounce {
    <F extends Func>(wait: number, fn: F): DebounceFunc<F>;
    (wait: number): <F extends Func>(fn: F) => DebounceFunc<F>;
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
export default curryN(
    2,
    <F extends Func>(wait: number, fn: F): DebounceFunc<F> => {
        let timeout;

        function f() {
            let args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(
                () => fn.apply(this, args), // eslint-disable-line prefer-rest-params
                wait
            );
        }

        f.cancel = () => clearTimeout(timeout);

        return f;
    }
) as Debounce;
