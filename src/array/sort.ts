import curryN from '../function/curryN';

interface Sort {
    <T>(fn: (a: T, b: T) => number, list: ReadonlyArray<T>): T[];
    <T>(fn: (a: T, b: T) => number): (list: ReadonlyArray<T>) => T[];
}

const defaultComparator = (a, b) => a - b;

/**
 * Returns a copy of the array, sorted according to the comparator function,
 * which should accept two values at a time and return a negative number if the
 * first value is smaller, a positive number if it's larger, and zero if they
 * are equal. Please note that this is a **copy** of the list. It does not
 * modify the original.
 *
 * @param {Function} comparator A sorting function
 * @param {Array} arr The list to sort
 * @return {Array} a new array with its elements sorted by the comparator function.
 * @example
 *
 *      var diff = function(a, b) { return a - b; };
 *      sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 */
export default curryN(2, (comparator = defaultComparator, arr = []) => {
    const newArray = Array.prototype.slice.call(arr);

    return newArray.sort(comparator);
}) as Sort;
