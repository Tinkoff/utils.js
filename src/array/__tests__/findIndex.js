import findIndex from '../findIndex';

describe('utils/array/findIndex', () => {
    it('should return founded value or undefined otherwise', () => {
        expect(findIndex(a => a > 3, [1, 2, 3, 4])).toBe(3);
        expect(findIndex(a => a % 2 === 0)([1, 2, 3, 4])).toBe(1);
        expect(findIndex(a => a > 100, [1, 2, 3])).toBe(-1);
    });
});
