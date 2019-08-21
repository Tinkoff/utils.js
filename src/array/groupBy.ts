import curryN from '../function/curryN';
import { ArrPred } from '../typings/types';
import map from './map';

interface GroupBy {
    <T>(fns: ArrPred<T>[], list: ArrayLike<T>): T[][];
    <T>(fns: ArrPred<T>[]): (list: ArrayLike<T>) => T[][];
}

/**
 * Creates an array of arrays generated from the results of running
 * each element of list thru each `fn`. The corresponding
 * value of each index is an array of elements satisfies to function with that index, and
 * the last array is elements with no satisfied function
 *
 * @param {Array<Function>} fns The functions to check values in a list.
 * @param {Array} list The list to iterate over.
 * @returns {Array} Returns the composed array.
 * @example
 *
 * groupBy([isPositive, isZero, isNegative], [0, -3, 2, 'str', 4, -1]);// => [[2,4], [0], [-3, -1], ['str']]
 */
export default curryN(2, <T>(fns: ArrPred<T>[], arr: ArrayLike<T> = []) => {
    const n = fns.length;
    const result = map(() => [], Array(n));
    const rest = [];

    for (let arrI = 0; arrI < arr.length; arrI++) {
        const value = arr[arrI];
        let fnsI;

        for (fnsI = 0; fnsI < n; fnsI++) {
            if (fns[fnsI](value, arrI, arr)) {
                result[fnsI].push(value);
                break;
            }
        }

        if (fnsI === n) {
            rest.push(value);
        }
    }

    result.push(rest);

    return result;
}) as GroupBy;
