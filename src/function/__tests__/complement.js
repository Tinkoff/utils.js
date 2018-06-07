import complement from '../complement';

describe('utils/function/complement', () => {
    it('should return function opposite to passed', () => {
        const f = jest.fn(arg => arg);
        const g = complement(f);

        expect(g(true)).toBe(false);
        expect(f).toBeCalledWith(true);

        expect(g(0)).toBe(true);
        expect(f).toBeCalledWith(0);
    });
});
