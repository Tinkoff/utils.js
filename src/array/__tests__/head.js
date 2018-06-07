import head from '../head';

describe('utils/array/head', () => {
    it('should return head element in array', () => {
        expect(head([1, 2, 3, 4, 5])).toBe(1);
        expect(head([1, 2, 3])).toBe(1);
        expect(head([])).toBeUndefined();
    });
});
