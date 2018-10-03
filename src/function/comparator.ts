import { comparator } from '../typings/types';
/**
 * Makes a comparator function out of a function that reports whether the first
 * element is less than the second.
 *
 * @param {Function} pred A predicate function of arity two which will return `true` if the first argument
 * is less than the second, `false` otherwise
 * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`
 * @example
 *
 *      var byAge = comparator((a, b) => a.age < b.age);
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByIncreasingAge = sort(byAge, people);
 */
export default (function (pred) {
    return function (a, b) {
        if (pred(a, b)) {
            return -1;
        }
        return pred(b, a) ? 1 : 0;
    }
}) as typeof comparator;
