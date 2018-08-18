import memoizeWith from './with';
import identity from '../identity';

/**
 * Memoize functions with single argument of non-primitive argument.
 * Uses Map instance for cache, because it's keys can be non-primitive.
 * Use it when shallow equality for cache lookup is enough.
 * It suitable for functions with single argument of primitive type too.
 *
 * @param {Function} fn
 * @returns {Function}
 * @example
 *     const addFlag = obj => ({...obj, flag: true });
 *     const memoize = memoizeWeak(addFlag));
 *     const test = {test: 1};
 *     memoize(test); // from addFlag call
 *     memoize({test: 1}); // from addFlag call
 *     memoize(test); // from cache
 */
export default memoizeWith(() => new Map(), identity);
