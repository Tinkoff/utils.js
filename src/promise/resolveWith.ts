import curryN from '../function/curryN';

interface ResolveWith {
    <TResult>(func: (...args) => TResult, ...payload): Promise<TResult>;
    <TResult>(func: (...args) => TResult): (...payload) => Promise<TResult>;
}

/**
 * Returns a promise that resolves with a value returned
 * by the supplied function when passed the supplied payload
 *
 * @param {Function} func
 * @param {*[]} payload
 * @returns {Promise}
 * @example
 *      rejectWith(toLowerCase, 'OK').then( res => console.info(res) );// => 'ok'
 */
export default curryN(2, (func, ...payload) => {
    return Promise.resolve(func(...payload));
}) as ResolveWith;
