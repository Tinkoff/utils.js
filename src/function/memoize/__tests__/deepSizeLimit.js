import memoizeWithCacheSize from '../deepSizeLimit';

describe('src/memoize/deepSizeLimit', () => {
    const prepare = () => {
        const fn = jest.fn((...args) => args);
        const memoizedFn = memoizeWithCacheSize(2, fn);

        return {
            fn,
            memoizedFn
        };
    };

    it('with multiple deep equally objects get cache', () => {
        const { fn, memoizedFn } = prepare();

        memoizedFn({});
        memoizedFn({});
        expect(fn).toHaveBeenCalledTimes(1);
        memoizedFn({ test: 1 });
        memoizedFn({});
        expect(fn).toHaveBeenCalledTimes(2);
        memoizedFn({ test: 2 });
        memoizedFn({});
        expect(fn).toHaveBeenCalledTimes(4);
    });
});
