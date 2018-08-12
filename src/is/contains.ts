import { contains as ramdaContains } from 'ramda';
import equals from './equal';
import curryN from '../function/curryN';

// Array.prototype.indexOf doesn't exist below IE9
// manually crawl the list to distinguish between +0 and -0
// NaN
// non-zero numbers can utilise Set
// all these types can utilise Set
// null can utilise Set
// anything else not covered above, defer to R.equals
const indexOf = (list, a, idx) => { // eslint-disable-line max-statements, complexity
    // Array.prototype.indexOf doesn't exist below IE9
    if (typeof list.indexOf === 'function') {
        switch (typeof a) {
            case 'number':
                const inf = 1 / a;
                let item;

                if (a === 0) {
                    // manually crawl the list to distinguish between +0 and -0
                    while (idx < list.length) {
                        item = list[idx];
                        if (item === 0 && 1 / item === inf) {
                            return idx;
                        }
                        idx += 1;
                    }
                    return -1;
                } else if (a !== a) { // eslint-disable-line no-self-compare
                    // NaN
                    while (idx < list.length) {
                        item = list[idx];
                        if (typeof item === 'number' && item !== item) { // eslint-disable-line no-self-compare
                            return idx;
                        }
                        idx += 1;
                    }
                    return -1;
                }
                // non-zero numbers can utilise Set
                return list.indexOf(a, idx);
            // all these types can utilise Set
            case 'string':
            case 'boolean':
            case 'function':
            case 'undefined':
                return list.indexOf(a, idx);
            case 'object':
                if (a === null) {
                    // null can utilise Set
                    return list.indexOf(a, idx);
                }
        }
    }
    // anything else not covered above, defer to R.equals
    while (idx < list.length) {
        if (equals(list[idx], a)) {
            return idx;
        }
        idx += 1;
    }
    return -1;
};

const contains = (a, list) => indexOf(list, a, 0) > -1;

/**
 * Returns `true` if the specified value is equal, in `is/equal` terms, to at
 * least one element of the given list; `false` otherwise.
 *
 * @param {Object} a The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the item is in the list, `false` otherwise.
 * @example
 *
 *      contains(3, [1, 2, 3]); //=> true
 *      contains(4, [1, 2, 3]); //=> false
 *      contains([42], [[42]]); //=> true
 */
export default curryN(2, contains) as typeof ramdaContains;
