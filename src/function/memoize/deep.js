import memoizeWith, { createCacheFrom } from './with';

/**
 * Memoize function with multiply arguments of any type.
 * Use it when you need deep equality for cache lookup.
 *
 * @param {Function} fn
 * @returns {Function}
 * @example
 *     const addFlag = obj => ({...obj, flag: true });
 *     const memoize = memoizeWeak(addFlag));
 *     const test = {};
 *     memoize(test, {test: 2}); // from addFlag call
 *     memoize(test, {test: 2}); // from cache
 *     test.id = 123;
 *     memoize(test); // from addFlag call
 */
export default memoizeWith(createCacheFrom, (...args) =>
  JSON.stringify(args)
);
