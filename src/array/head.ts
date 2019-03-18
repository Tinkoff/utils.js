interface Head {
    <T>(list: ArrayLike<T>): T | undefined;
    (list: string): string;
}

/**
 * Returns the first element of the given array.
 *
 * @param {Array} arr
 * @return {*}
 * @example
 *
 *      head(['fi', 'fo', 'fum']); //=> 'fi'
 *      head([]); //=> undefined
 */
export default (<T>(arr: ArrayLike<T> | string) => arr && arr[0]) as Head;
