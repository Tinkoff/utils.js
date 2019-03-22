import curryN from '../function/curryN';

type KeyFunc<T> = (a: T) => string;

interface UniqBy {
    <T>(fn: KeyFunc<T>, list: ArrayLike<T>): T[];
    <T>(fn: KeyFunc<T>): (list: ArrayLike<T>) => T[];
}

/**
 * Returns unique items in array. Uniqueness is defined by `fn`.
 *
 * @param {Function} fn
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 *
 *      uniqBy(x => x % 2, [1, 2, 2, 3, 4, 5, 5, 5]) // [1, 2]
 */
export default curryN(2, <T>(fn: KeyFunc<T>, arr: ArrayLike<T> = []) => {
    const result = [];
    const unq = Object.create(null);

    for (let i = 0; i < arr.length; i++) {
        const key = fn(arr[i]);

        if (!unq[key]) {
            result.push(arr[i]);
            unq[key] = true;
        }
    }

    return result;
}) as UniqBy;
