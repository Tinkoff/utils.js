import slice from './slice';

interface Init {
    (list: string): string;
    <T>(list: ArrayLike<T>): T[];
}

/**
 * Returns all but the last element of the given list or string.
 *
 * @param {Array} arr
 * @return {*}
 * @example
 *
 *      init([1, 2, 3]);  //=> [1, 2]
 *      init([1, 2]);     //=> [1]
 *      init([1]);        //=> []
 *      init([]);         //=> []
 */
export default (<T>(arr: ArrayLike<T>) => slice(0, -1, arr)) as Init;
