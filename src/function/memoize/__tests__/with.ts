import memoizeWith from '../with';
import identity from '../../identity';

describe('memoizeWith', () => {
    it('uses createCache function for cache creating', () => {
        const createCache = jest.fn();

        memoizeWith(createCache, () => {}, () => {});
        expect(createCache).toHaveBeenCalled();
    });
    it('returns cache if cache has value for given key', () => {
        const cacheGetResult = 'test';
        const testArg = 'testArg';
        const cache = {
            get: jest.fn(() => cacheGetResult),
            has: jest.fn(() => true),
            set: jest.fn()
        };
        const fn = jest.fn();
        const hasher = jest.fn(identity);

        const memoizedFn = memoizeWith(() => cache, hasher, fn);
        const result = memoizedFn(testArg);

        expect(result).toBe(cacheGetResult);
        expect(fn).not.toHaveBeenCalled();
        expect(cache.set).not.toHaveBeenCalled();
        expect(hasher).toHaveBeenCalledWith(testArg);
        expect(cache.get).toHaveBeenCalledWith(testArg);
        expect(cache.has).toHaveBeenCalledWith(testArg);
    });
    it('returns not cached value if cache has not value for given key', () => {
        const fnResult = 'test';
        const testArg = 'testArg';
        const cache = {
            get: jest.fn(),
            has: jest.fn(() => false),
            set: jest.fn()
        };
        const fn = jest.fn(() => fnResult);
        const hasher = jest.fn(identity);

        const memoizedFn = memoizeWith(() => cache, hasher, fn);
        const result = memoizedFn(testArg);

        expect(result).toBe(fnResult);
        expect(fn).toHaveBeenCalled();
        expect(cache.set).toHaveBeenCalledWith(testArg, fnResult);
        expect(hasher).toHaveBeenCalledWith(testArg);
        expect(cache.get).not.toHaveBeenCalled();
        expect(cache.has).toHaveBeenCalledWith(testArg);
    });
});
