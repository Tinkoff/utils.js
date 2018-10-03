import curryN from '../function/curryN';
import { rejectWith } from '../typings/types';

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
}) as typeof rejectWith;
