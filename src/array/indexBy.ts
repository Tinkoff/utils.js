import curryN from '../function/curryN';

type Pred<T> = (v: T, index: number, arr: ArrayLike<T>) => string;

interface IndexBy {
    <T>(fn: Pred<T>, list: ArrayLike<T>): Record<string, T>;
    <T>(fn: Pred<T>): (list: ArrayLike<T>) => Record<string, T>;
}

/**
 * Given a function that generates a key, turns a list of objects into an
 * object indexing the objects by the given key. Note that if multiple
 * objects generate the same value for the indexing key only the last value
 * will be included in the generated object.
 *
 * @param {Function} fn Function :: a -> String
 * @param {Array} arr The array of objects to index
 * @return {Object} An object indexing each array element by the given property.
 * @example
 *
 *      var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
 *      indexBy(x => x.id, list);
 *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
 */
export default curryN(2, <T>(fn: Pred<T>, arr: ArrayLike<T> = []) => {
    const result = {};

    for (let i = 0; i < arr.length; i++) {
        result[fn(arr[i], i, arr)] = arr[i];
    }

    return result;
}) as IndexBy;
