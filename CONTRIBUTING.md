# Contributing
1. Fork this repository.
1. Install dependencies with `npm install`.
1. Make sure tests are passing running `npm run test`.
1. Make your changes. Make sure the commands `npm run build` and `npm run test` are not failing.
1. Finally send a GitHub Pull Request with a clear list of what you've done (read more [about pull requests](https://help.github.com/articles/about-pull-requests/)). Make sure all of your commits are atomic (one feature per commit).

## How to add new utility
1. Decide where to place new utility according to the structure of the library.
1. Pick the name of the new utility (corresponding to the functionality or well-known name if there is analog in other libraries (ramda, lodash))
1. Create a new file with picked named in the corresponding directory, and add a file with the same name to the '_\_tests__' directory.
1. Implement new functionality. For autocurrying wrap utility to `/function/curry` or `/function/curryN` (`curry` doesn't support default and rest arguments, so prefer `curryN`).
1. Add tests (don't forget edge cases and exceptions).
1. Add JSDoc with the description of functionality, arguments types and a little example.

## How to write JSDoc right
List of supported tags is [here](https://esdoc.org/manual/tags.html).

JSDoc should contain the following:
1. The description of a utility.
1. Add arguments types and description for them (see @param).
1. Add the type and the description of the return value (see @return).
1. Add an example to demonstrate the usage of a utility (see @example).

If there is some additional information you want to add, prepend it with `**Note:**`.

### Example
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
