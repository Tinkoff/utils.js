interface Init {
    <T>(list: ReadonlyArray<T>): T[];
    (list: string): string;
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
export default ((arr) => arr.slice(0, -1)) as Init;
