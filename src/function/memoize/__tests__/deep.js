import memoizeDeep from '../deep';

describe('src/memoize/deep', () => {
    const prepare = () => {
        const fn = jest.fn((...args) => args);
        const memoizedFn = memoizeDeep(fn);

        return {
            fn,
            memoizedFn
        };
    };

    describe('with single primitive argument', () => {
        it('returns cached value', () => {
            const { fn, memoizedFn } = prepare();

            expect(memoizedFn(1)).toBe(memoizedFn(1));
            expect(fn).toHaveBeenCalledTimes(1);
        });
        it('return not cached value', () => {
            const { fn, memoizedFn } = prepare();

            expect(memoizedFn(1)).not.toBe(memoizedFn(2));
            expect(fn).toHaveBeenCalledTimes(2);
        });

        it('returns not cached value for shallow equally string and number arguments', () => {
            const { fn, memoizedFn } = prepare();

            expect(memoizedFn(1)).not.toBe(memoizedFn('1'));
            expect(fn).toHaveBeenCalledTimes(2);
        });
    });
    describe('with multiple primitive argument', () => {
        it('returns cached value', () => {
            const { memoizedFn, fn } = prepare();

            expect(memoizedFn(1, 2)).toBe(memoizedFn(1, 2));
            expect(fn).toHaveBeenCalledTimes(1);
        });
        it('returns not cached value', () => {
            const { memoizedFn, fn } = prepare();

            expect(memoizedFn(1, 2)).not.toBe(memoizedFn(1, 2, 3));
            expect(fn).toHaveBeenCalledTimes(2);
        });
    });

    describe('with multiple non-primitive arguments', () => {
        it('returns cache for deep equally objects', () => {
            const { fn, memoizedFn } = prepare();

            expect(memoizedFn({}, [1, 2, 3])).toBe(memoizedFn({}, [1, 2, 3]));
            expect(fn).toHaveBeenCalledTimes(1);
        });
        it('returns not cached value for deep not equall objects', () => {
            const { fn, memoizedFn } = prepare();
            const obj = {};
            const firstResult = memoizedFn(obj);

            obj.test = 2;
            const secondResult = memoizedFn(obj);

            expect(fn).toHaveBeenCalledTimes(2);
        });
    });
});
