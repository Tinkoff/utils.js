import curryN from '../function/curryN';
import { Func } from '../typings/types';

interface ResolveWith {
    <T1, T2, R>(func: (a: T1, b: T2, ...args) => R, a: T1, b: T2, ...args): Promise<R>;
    <T, R>(func: (a: T) => R, a: T): Promise<R>;
    <T1, T2, R>(func: (a: T1, b: T2, ...payload) => R): (a: T1, b: T2, ...payload) => Promise<R>;
    <T, R>(func: (a: T) => R): (a: T) => Promise<R>;
    <R>(func: Func<R>): (...payload) => Promise<R>;
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
export default curryN(2, <R>(func: Func<R>, ...payload) => {
    return Promise.resolve(func(...payload));
}) as ResolveWith;
