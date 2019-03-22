import memoizeWith from './with';
import identity from '../identity';

/**
 * Simple memoization using WeakMap.
 * Only suitable for functions with single argument of non-primitive type.
 *
 * @param {Function} fn
 * @returns {Function}
 * @example
 *     const addFlag = obj => ({...obj, flag: true });
 *     const memoize = memoizeWeak(addFlag));
 *     const test = {test: 1};
 *     memoize(test); // from addFlag call
 *     memoize({test: 1}); // from addFlag call;
 *     memoize(test); // from cache
 */
export default memoizeWith(() => new WeakMap(), identity);
