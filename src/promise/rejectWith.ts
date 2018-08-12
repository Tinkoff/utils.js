import curryN from '../function/curryN';

/**
 * Returns a promise that rejects with a value returned
 * by the supplied function when passed the supplied payload
 *
 * @param {Function} func
 * @param {*[]} payload
 * @returns {Promise}
 * @example
 *      rejectWith(toLowerCase, 'Error').catch( err => console.error(err) );// => 'error'
 */
export default curryN(2, (func, ...payload) => {
    return Promise.reject(func(...payload));
}) as rejectWith;

interface rejectWith {
    <TResult>(func: (...args) => TResult, ...payload): Promise<TResult>
    <TResult>(func: (...args) => TResult): (...payload) => Promise<TResult>
}