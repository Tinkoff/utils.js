import curryN from '../curryN';

/**
 * `memoizeWith` is a memoize function fabric. It has simple classic memoization signature.
 * Use it to build your own memoization function.
 *
 * It takes  three params:
 * 1) function that will be used to create cache object.
 * Cache must have three methods - get, has, set. So it's compatible with Map, WeakMap, LRU (https://www.npmjs.com/package/lru-cache) instances.
 * 2) function that will be used to create hash key for cache lookup. It is invoked with arguments for result function.
 * 3) function, that will be memoized.
 * *
 * @param {Function} createCache - creates cache object
 * @param {Function} hasher - creates hash for given arguments
 * @param {Function} function that will be memoized
 * @return {Function}
 * @example
 *      const createCache = () => new Map();
 *      const hasher = (...args) => JSON.stringify(args);
 *      const memoize = memoizeWith(createCache, hasher);
 *
 *      const add = (a,b) => a + b;
 *      const memoizeAdd = memoize(add);
 *      const sum = add(1,3); // from original add call
 *      const sum = add(1,4); // from original add call
 *      const sum = add(1,3); // from cache
 */
const memoizeWith = curryN(3, (getCache, hasher, fn) => {
    const cache = getCache();

    return (...args) => {
        const cacheKey = hasher(...args);

        if (cache.has(cacheKey)) {
            return cache.get(cacheKey);
        }

        const fnCallResult = fn(...args);

        cache.set(cacheKey, fnCallResult);

        return fnCallResult;
    };
});

export const createCacheFrom = (obj = Object.create(null)) => {
    return {
        get(key) {
            return obj[key];
        },
        set(key, value) {
            obj[key] = value;
            return this;
        },
        has(key) {
            return key in obj;
        }
    };
};

export default memoizeWith;
