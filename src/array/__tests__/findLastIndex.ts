import findLastIndex from '../findLastIndex';

describe('utils/array/findLastIndex', () => {
    it('should return founded value or undefined otherwise', () => {
        const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];

        expect(findLastIndex((a) => a > 3, arr)).toBe(5);
        expect(findLastIndex((a) => a > 100, arr)).toBe(-1);
        expect(findLastIndex<number>((a) => a % 2 === 0)(arr)).toBe(7);
    });

    it('test callback parameters', () => {
        const fn = jest.fn();
        const arr = [1, 2, 3];

        findLastIndex(fn, arr);

        expect(fn).toHaveBeenCalledWith(3, 2, arr);
        expect(fn).toHaveBeenCalledWith(2, 1, arr);
        expect(fn).toHaveBeenCalledWith(1, 0, arr);
    });
});
