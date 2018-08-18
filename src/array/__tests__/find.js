import find from '../find';

describe('utils/array/find', () => {
    it('should return founded value or undefined otherwise', () => {
        expect(find(a => a > 3, [1, 2, 3, 4])).toBe(4);
        expect(find(a => a % 2 === 0)([1, 2, 3, 4])).toBe(2);
        expect(find(a => a > 100, [1, 2, 3])).toBeUndefined();
    });

    it('test callback parameters', () => {
        const fn = jest.fn();
        const arr = [1, 2, 3];

        find(fn, arr);

        expect(fn).toHaveBeenCalledWith(1, 0, arr);
        expect(fn).toHaveBeenCalledWith(2, 1, arr);
        expect(fn).toHaveBeenCalledWith(3, 2, arr);
    });
});
