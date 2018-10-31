import memoize from '../weak';

describe('src/memoize/weak', () => {
    const prepare = () => {
        const fn = jest.fn();
        const memoizedFn = memoize(fn);

        return {
            fn,
            memoizedFn
        };
    };

    it('throws error if argument is primitive', () => {
        const { memoizedFn } = prepare();

        expect(() => { memoizedFn(1); }).toThrow(TypeError);
    });
    describe('with the same object argument', () => {
        it('positive', () => {
            const { fn, memoizedFn } = prepare();
            const obj = {};

            memoizedFn(obj);
            memoizedFn(obj);
            expect(fn).toHaveBeenCalledTimes(1);
        });
        it('negative', () => {
            const { fn, memoizedFn } = prepare();

            memoizedFn({});
            memoizedFn({});
            expect(fn).toHaveBeenCalledTimes(2);
        });
        // separate test, because functions are not serializable
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
});
