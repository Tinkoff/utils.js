interface Last {
    <T>(list: ReadonlyArray<T>): T | undefined;
    (list: string): string;
}

/**
 * Returns the last element of the given array.
 *
 * @param {Array} arr
 * @return {*}
 * @example
 *
 *      last(['fi', 'fo', 'fum']); //=> 'fum'
 *      last([]); //=> undefined
 */
export default ((arr) => arr && arr[arr.length - 1]) as Last;
