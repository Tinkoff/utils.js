import curryN from '../function/curryN';

interface IndexBy {
    <T>(fn: (a: T) => string, list: ReadonlyArray<T>): { [key: string]: T };
    <T>(fn: (a: T) => string): (list: ReadonlyArray<T>) => { [key: string]: T };
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
export default curryN(2, (fn, arr = []) => {
    const result = {};

    for (let i = 0; i < arr.length; i++) {
        result[fn(arr[i])] = arr[i];
    }

    return result;
}) as IndexBy;
