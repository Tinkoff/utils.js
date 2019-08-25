import findIndex from '../findIndex';

describe('utils/array/findIndex', () => {
    it('should return founded value or undefined otherwise', () => {
        expect(findIndex((a) => a > 3, [1, 2, 3, 4])).toBe(3);
        expect(findIndex((a: number) => a % 2 === 0)([1, 2, 3, 4])).toBe(1);
        expect(findIndex((a) => a > 100, [1, 2, 3])).toBe(-1);
    });

    it('test callback parameters', () => {
        const fn = jest.fn();
        const arr = [1, 2, 3];

        findIndex(fn, arr);

        expect(fn).toHaveBeenCalledWith(1, 0, arr);
        expect(fn).toHaveBeenCalledWith(2, 1, arr);
        expect(fn).toHaveBeenCalledWith(3, 2, arr);
    });
});
