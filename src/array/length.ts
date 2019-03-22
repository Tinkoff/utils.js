interface Length {
    <T>(list: T): T extends ArrayLike<any> ? number : void;
}

/**
 * Returns the number of elements in the array by returning `arr.length`.
 *
 * @param {Array} arr The array to inspect.
 * @return {Number} The length of the array.
 * @example
 *
 *      length([]); //=> 0
 *      length([1, 2, 3]); //=> 3
 */
export default ((arr?: ArrayLike<any>) => arr && arr.length) as Length;
