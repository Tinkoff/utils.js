import debounce from '../debounce';

describe('utils/function/debounce', () => {
    it('should call function one time after "wait" ms', () => {
        let context;
        const f = jest.fn(function() {
            context = this;
        });
        const debounced = debounce(1000, f);

        debounced.call({ a: 1 }, 1, 2);
        debounced.call({ a: 2 }, 3, 4);
        debounced.call({ a: 3 }, 5, 6);
        expect(f).not.toBeCalled();
        jest.runAllTimers();
        expect(f.mock.calls).toHaveLength(1);
        expect(f).toBeCalledWith(5, 6);
        expect(context).toEqual({ a: 3 });
    });

    it('debounced function should be cancellable', () => {
        const f = jest.fn();
        const debounced = debounce(1000, f);

        expect(typeof debounced.cancel).toBe('function');
        debounced();
        debounced.cancel();
        jest.runAllTimers();
        expect(f).not.toBeCalled();
    });
});
