/**
 * Returns unique items in array
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 *
 *  unique([1,2,1,2,3,4,1,2]) // => [1, 2, 3, 4]
 */
export default (arr = []) => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }

    return result;
};
