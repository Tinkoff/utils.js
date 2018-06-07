# Contributing
1. Fork, then clone the repo
1. Install dependencies with `npm install`
1. Make sure the tests pass with `npm run test`
1. Make changes. Make the tests pass
1. Push to your fork and submit a pull request

## How to add new utility
1. You should decide where to place new utility according the structure of library
1. Pick the name of the new utility (corresponding to functionality or well-known name if there is analogue in other libraries (ramda, lodash))
1. Create new file with picked named in corresponding directory, and add file with the same name to the directory '_\_tests__'
1. Implement new functionality. For auto currying wrap utility to `/function/curry` or `/function/curryN` (curry doesn't support default and rest arguments, so prefer to use curryN)
1. Add tests (don't forget edge cases and exceptions)
1. Add JSDoc with description of functionality, arguments types and a little example

## How to write JSDoc right
List of supported tags are [here](https://esdoc.org/manual/tags.html)

List of unnecessary things in JSDoc:
1. Description of utility
1. If there is some additional information you want to add - prepend it with '*\*Note:**'
1. Add arguments types and description for them (see @param)
1. Add type and description for return value (see @return)
1. Add an example to demonstrate to to use utility (see @example)

##### Example
```javascript
import curryN from '../function/curryN';

/**
 * Returns `true` if at least one of elements of the list match the predicate,
 * `false` otherwise.
 *
 * @param {Function} fn The predicate function.
 * @param {Array} arr The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
 *         otherwise.
 * @example
 *
 *      var lessThan0 = x => x < 0;
 *      var lessThan2 = x => x < 2;
 *      any(lessThan0)([1, 2]); //=> false
 *      any(lessThan2)([1, 2]); //=> true
 */
export default curryN(2, (fn, arr = []) => {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            return true;
        }
    }

    return false;
});
```
