import findLast from '../findLast';

describe('utils/array/findLast', () => {
    it('should find last', () => {
        expect(findLast(a => a === 2, [1, 2, 3])).toEqual(2);
        expect(findLast(a => a === 4, [1, 2, 3])).toBeUndefined();
        expect(findLast(a => a === 4, [])).toBeUndefined();
    });

    it('test callback parameters', () => {
        const fn = jest.fn();
        const arr = [1, 2, 3];

        findLast(fn, arr);

        expect(fn).toHaveBeenCalledWith(3, 2, arr);
        expect(fn).toHaveBeenCalledWith(2, 1, arr);
        expect(fn).toHaveBeenCalledWith(1, 0, arr);
    });
});
