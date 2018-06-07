import either from '../either';

describe('utils/function/either', () => {
    const t = jest.fn(() => true);
    const f = jest.fn(() => false);

    beforeEach(() => {
        f.mockClear();
        t.mockClear();
    });

    it('should return result of first function', () => {
        expect(either(t, f)(5)).toBe(true);
        expect(t).toBeCalledWith(5);
        expect(f).not.toBeCalled();
    });

    it('should return result of second function', () => {
        expect(either(f, t)(2)).toBe(true);
        expect(f).toBeCalledWith(2);
        expect(t).toBeCalledWith(2);
    });

    it('should pass several params to functions', () => {
        expect(either(f, f)(1, 2, 3)).toBe(false);
        expect(f).toBeCalledWith(1, 2, 3);
    });
});
