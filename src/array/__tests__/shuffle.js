import shuffle from '../shuffle';

describe('utils/array/shuffle', () => {
    it('should return new array with rearranged elements', () => {
        const arr = [1, 2, 3, 4, 5];
        const res = shuffle(arr);

        expect(res).not.toBe(arr);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
        expect(res).toHaveLength(arr.length);
        expect(res).toEqual(expect.arrayContaining(arr));
    });
});
