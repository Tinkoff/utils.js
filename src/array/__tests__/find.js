import find from '../find';

describe('utils/array/find', () => {
    it('should return founded value or undefined otherwise', () => {
        expect(find(a => a > 3, [1, 2, 3, 4])).toBe(4);
        expect(find(a => a % 2 === 0)([1, 2, 3, 4])).toBe(2);
        expect(find(a => a > 100, [1, 2, 3])).toBeUndefined();
    });
});
