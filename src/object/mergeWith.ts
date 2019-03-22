import curryN from '../function/curryN';
import objectKeys from './keys';

type Func<T1, T2, R> = (
    v1: T1[keyof T1] | T2[keyof T2],
    v2: T1[keyof T1] | T2[keyof T2],
    k: keyof (T1 & T2),
    t1: T1,
    t2: T2
) => R;

interface MergeWith {
    <T1, T2, R>(fn: Func<T1, T2, R>, a: T1, b: T2): Record<keyof (T1 & T2), R>;
    <T1, R>(fn: Func<T1, any, R>, a: T1): <T2>(b: T2) => Record<keyof (T1 & T2), R>;
    <R>(fn: Func<any, any, R>): {
        <T1, T2>(a: T1, b: T2): Record<keyof (T1 & T2), R>;
        <T1>(a: T1): <T2>(b: T2) => Record<keyof (T1 & T2), R>;
        <T>(...args: T[]): Record<keyof T, R>;
    };
    <T, R>(fn: Func<any, any, R>, ...args: T[]): Record<keyof T, R>;
}

/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the others objects. If a key exists in several objects
 * provided `fn` will be called and should return resolve value
 *
 * @param {Function} fn function to call if prop conflict appear. Receives three argument, `valueLeft`, `valueRight`,
 * `key`, `leftObj`, `rightObj`.
 * @param {...Object} sources
 * @return {Object}
 * @example
 *
 * mergeWith((x, y) => x + y, { 'name': 'fred', 'age': 10 }, { 'age': 40 }); //=> { 'name': 'fred', 'age': 50 }
 */
export default curryN(3, (fn: Func<any, any, any>, ...sources) => {
    const result: Record<any, any> = Object.assign({}, sources[0]);

    for (let i = 1; i < sources.length; i++) {
        const source = sources[i];
        const keys = objectKeys(source);

        for (let j = 0; j < keys.length; j++) {
            const key = keys[j];

            if (Object.prototype.hasOwnProperty.call(result, key)) {
                result[key] = fn(result[key], source[key], key, result, source);
            } else {
                result[key] = source[key];
            }
        }
    }

    return result;
}) as MergeWith;
