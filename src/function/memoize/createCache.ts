import curryN from '../curryN';

/**
 * Creates a cache instance base on passed object.
 * Return instance has 3 methods: get, set, has
 *
 * *
 * @param {Function} obj - object that will be used as cache
 * @return {{get; set; has}}
 * @example
 *      const cache = createCache();
 *      cache.set('a', 5);
 *      cache.has('a'); // true
 *      cache.get('a'); // 5
 */
export default (obj = Object.create(null)) => {
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
