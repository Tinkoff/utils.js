import memoizeOne from '../one';

describe('src/function/memoize/one', () => {
    describe('default equality function', () => {
        const prepare = () => {
            const fn = jest.fn((...args) => args);
            const memoizedFn = memoizeOne(fn);

            return {
                fn,
                memoizedFn,
            };
        };

        it('with multiple deep equally objects get cache, reset cache and resume', () => {
            const { fn, memoizedFn } = prepare();
            memoizedFn({}, [1, 2, 3]);
            memoizedFn({}, [1, 2, 3]);
            expect(fn).toHaveBeenCalledTimes(1);
            memoizedFn({}, [1, 2, 3, 4]);
            expect(fn).toHaveBeenCalledTimes(2);
            memoizedFn({}, [1, 2, 3]);
            expect(fn).toHaveBeenCalledTimes(3);
            memoizedFn({}, [1, 2, 3, 4, 5]);
            memoizedFn({}, [1, 2, 3, 4, 5]);
        });
    });
});
