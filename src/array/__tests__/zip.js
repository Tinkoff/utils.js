import zip from '../zip';

describe('utils/array/zip', () => {
    it('zip two arrays', () => {
        expect(zip([1, 2, 3], [4, 5, 6, 7, 8])).toEqual([[1, 4], [2, 5], [3, 6]]);
    });
});
