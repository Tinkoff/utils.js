import memoizeWith, { createCacheFrom } from './with';
import curryN from '../curryN';

/**
 * Memoize function with multiply arguments of any type, but it
 * clears cache every time it reaches the limit. Use it when you need
 * deep equality for cache lookup and afraid of memory leak.
 *
 * @param {Number} sizeLimit. Cache size limit
 * @returns {Function} fn
 * @example
 *     const addFlag = obj => ({...obj, flag: true });
 *     const memoize = memoizeDeepSizeLimit(2, addFlag));
 *     memoize({test: 2}); // from addFlag call
 *     memoize({test: 2}); // from cache
 *     memoize({test: 3}); //from addFlag call
 *     memoize({test: 4}); // from addFlag call
 *     memoize({test: 2}); // from addFlag call (memory was cleared)
 */
export default curryN(2, (maxSize, fn) =>
    memoizeWith(
        () => createSizedCache(maxSize),
        (...args) => JSON.stringify(args),
        fn
    )
);

function createSizedCache(maxSize) {
    const cache = new Map();

    cache.set = (...args) => {
        // flush cache if size reached the limit
        if (cache.size >= maxSize) {
            cache.clear();
        }
        return Map.prototype.set.call(cache, ...args);
    };
    return cache;
}
