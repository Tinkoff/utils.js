import createCache from '../createCache';

describe('function/memoize/createCache', () => {
    it('simple case', () => {
        const cache = createCache();

        expect(cache.has('a')).toBe(false);
        expect(cache.get('a')).toBeUndefined();

        cache.set('a', 5);

        expect(cache.has('a')).toBe(true);
        expect(cache.get('a')).toBe(5);
    });

    it('initial value', () => {
        const cache = createCache({ a: 1, b: 2 });

        expect(cache.get('c')).toBeUndefined();
        expect(cache.get('a')).toBe(1);
        expect(cache.get('b')).toBe(2);
    });
});
