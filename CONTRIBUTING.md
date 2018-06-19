# Contributing
1. Fork this repository
1. Create a future branch (don't make changes in master branch)
1. Install dependencies with `npm install`
1. Make sure tests are passing by running `npm test`
1. Make your changes. Make sure `npm run build` and `npm test` will not fail
1. Send us pull request with a clear list of what you've done (read more [about pull requests](https://help.github.com/articles/about-pull-requests/)). Make sure all of your commits are atomic (one feature per commit) and have tests

## How to add new utility
1. Pick the descriptive name for the new utility
1. Decide where to place it
1. Create a new file with the same name at the proper path, and add a file with the same name to the `__tests__` directory
1. Implement new functionality
1. Add tests (don't forget edge cases and exceptions)
1. Add JSDoc with the description of functionality, arguments types and a small example

**Protip**: For autocurrying wrap utility to `/function/curry` or `/function/curryN` (`curry` doesn't support default and rest arguments, so for the most cases use `curryN`)

## How to write JSDoc
First, check out [documentation](https://esdoc.org/manual/tags.html) for all supported tags.

JSDoc should contain the following:
1. Description of a utility
1. Arguments types and description for them (see [`@param`](http://usejsdoc.org/tags-param.html))
1. Add type and description for the return value (see [`@return`](http://usejsdoc.org/tags-returns.html))
1. Add an example to demonstrate the usage of a utility (see [`@example`](http://usejsdoc.org/tags-example.html))

If there is some additional information you want to add, prepend it with `**Note:**` 

### Example
```js
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
