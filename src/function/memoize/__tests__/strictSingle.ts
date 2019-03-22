import memoizeStrict from '../strictSingle';

describe('src/memoize/strictSingle', () => {
    const prepare = () => {
        const fn = jest.fn();
        const memoizedFn = memoizeStrict(fn);

        return {
            fn,
            memoizedFn,
        };
    };

    describe('with the same object argument', () => {
        it('returns from cache', () => {
            const { fn, memoizedFn } = prepare();
            const obj = {};

            memoizedFn(obj);
            memoizedFn(obj);
            expect(fn).toHaveBeenCalledTimes(1);
        });
        it('returns not cached value', () => {
            const { fn, memoizedFn } = prepare();

            memoizedFn({});
            memoizedFn({});
            expect(fn).toHaveBeenCalledTimes(2);
        });
    });

    // separate test suite, because functions are not serializable
    describe('with functions', () => {
        it('with the same function', () => {
            const { fn, memoizedFn } = prepare();
            const testFn = () => {};

            memoizedFn(testFn);
            memoizedFn(testFn);
            expect(fn).toHaveBeenCalledTimes(1);
        });
        it('with different functions', () => {
            const { fn, memoizedFn } = prepare();

            memoizedFn(() => {});
            memoizedFn(() => {});
            expect(fn).toHaveBeenCalledTimes(2);
        });
    });
});
