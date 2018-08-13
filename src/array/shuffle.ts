/**
 * Creates an array of shuffled values
 *
 * @param {Array} arr The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 * @example
 *
 * shuffle([1, 2, 3, 4]); // => [4, 1, 3, 2]
 */
export default <T>(arr = [] as T[]) => {
    const len = arr.length;
    const result = new Array(len) as T[];

    for (let i = 0; i < len; i++) {
        const rand = Math.floor(Math.random() * i);

        if (rand !== i) {
            result[i] = result[rand];
        }

        result[rand] = arr[i];
    }

    return result;
};
