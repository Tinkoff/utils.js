import reduce from '../reduce';

describe('utils/array/reduce', () => {
    it('should reduce array', () => {
        expect(reduce((x, y) => 10 * x + y, 0, [1, 2, 3, 4, 5])).toBe(12345);
    });
});
