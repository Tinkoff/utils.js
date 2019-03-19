import curryN from '../curryN';

describe('utils/function/curryN', () => {
    it('should return curried function with specified arity', () => {
        const f = jest.fn(() => 3);
        let g = curryN(3, f);

        expect(f).not.toBeCalled();
        g = g(1);
        expect(f).not.toBeCalled();
        g = g(2);
        expect(f).not.toBeCalled();
        g = g(3);
        expect(g).toBe(3);
        expect(f).toBeCalledWith(1, 2, 3);
    });
});
