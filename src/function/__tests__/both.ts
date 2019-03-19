import both from '../both';

describe('utils/function/both', () => {
    const t = jest.fn(() => true);
    const f = jest.fn(() => false);

    beforeEach(() => {
        f.mockClear();
        t.mockClear();
    });

    it('should return result of first function', () => {
        expect(both(f, t)(5)).toBe(false);
        expect(f).toBeCalledWith(5);
        expect(t).not.toBeCalled();
    });

    it('should return result of second function', () => {
        expect(both(t, f)(2)).toBe(false);
        expect(t).toBeCalledWith(2);
        expect(f).toBeCalledWith(2);
    });

    it('should pass several params to functions', () => {
        expect(both(f, f)(1, 2, 3)).toBe(false);
        expect(f).toBeCalledWith(1, 2, 3);
    });

    it('should be true', () => {
        expect(both(t, t)(1, 2, 3)).toBe(true);
        expect(t).toBeCalledWith(1, 2, 3);
        expect(t).toBeCalledWith(1, 2, 3);
    });
});
