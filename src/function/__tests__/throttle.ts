import throttle from '../throttle';

describe('utils/function/throttle', () => {
    it('should call function at most once at "wait" ms period', () => {
        // eslint-disable-line max-statements
        let context;
        const f = jest.fn(function() {
            context = this;
        });
        const throttled = throttle(1000, f);

        throttled.call({ a: 1 }, 1, 2);
        throttled.call({ a: 2 }, 3, 4);
        throttled.call({ a: 3 }, 5, 6);
        expect(f.mock.calls).toHaveLength(1);
        expect(f).toBeCalledWith(1, 2);
        expect(context).toEqual({ a: 1 });
        jest.runAllTimers();
        expect(f.mock.calls).toHaveLength(2);
        throttled.call({ a: 4 }, 7);
        expect(f.mock.calls).toHaveLength(2);
        jest.runAllTimers();
        expect(f.mock.calls).toHaveLength(3);
        expect(f).toBeCalledWith(7);
        expect(context).toEqual({ a: 4 });
    });
});
