/**
 * Adds together all the elements of a list.
 *
 * @param {Array} arr An array of numbers
 * @return {Number} The sum of all the numbers in the list.
 * @example
 *
 *      sum([2,4,6,8,100,1]); //=> 121
 */
export default (arr = []) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
};
