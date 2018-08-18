import memoizeShallow from '../shallowSingle';

describe('src/memoize/shallowSingle', () => {
    const prepare = () => {
        const fn = jest.fn();
        const memoizedFn = memoizeShallow(fn);

        return {
            fn,
            memoizedFn
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
