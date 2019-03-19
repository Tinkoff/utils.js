import allPass from '../anyPass';

describe('utils/function/allPass', () => {
    it('should return false', () => {
        const f1 = jest.fn(() => false);
        const f2 = jest.fn(() => false);
        const f3 = jest.fn(() => false);

        expect(allPass([f1, f2, f3], 1, 2, 3)).toBe(false);
        expect(f1).toBeCalledWith(1, 2, 3);
        expect(f2).toBeCalledWith(1, 2, 3);
        expect(f3).toBeCalledWith(1, 2, 3);
    });
    it('should return true', () => {
        const f1 = jest.fn(() => false);
        const f2 = jest.fn(() => true);
        const f3 = jest.fn(() => false);

        expect(allPass([f1, f2, f3], 1, 2, 3)).toBe(true);
        expect(f1).toBeCalledWith(1, 2, 3);
        expect(f2).toBeCalledWith(1, 2, 3);
        expect(f3).not.toBeCalled();
    });
});
