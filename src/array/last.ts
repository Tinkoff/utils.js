interface Last {
    <T>(list: ArrayLike<T>): T | undefined;
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
export default (<T>(arr: ArrayLike<T> | string) => arr && arr[arr.length - 1]) as Last;
