import sum from '../sum';

describe('utils/array/sum', () => {
    it('should return sum of array', () => {
        expect(sum([1, 2, 3, 4, 5])).toBe(15);
        expect(sum([])).toBe(0);
        expect(sum([3])).toBe(3);
    });
});
