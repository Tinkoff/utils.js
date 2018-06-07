import tap from '../tap';

describe('utils/function/tap', () => {
    it('should call function and return passed argument', () => {
        const fn = jest.fn();
        const x = { test: '1222' };

        expect(tap(fn)(x)).toBe(x);
        expect(fn).toBeCalledWith(x);
    });
});
