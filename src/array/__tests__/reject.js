import reject from '../reject';

describe('utils/array/reject', () => {
    it('should reject arrays', () => {
        expect(reject(() => true, [])).toEqual([]);
        expect(reject(x => x > 2, [1, 2, 3, 4, 5])).toEqual([1, 2]);
        expect(reject(() => true, [1, 2, 3, 4, 5])).toEqual([]);
        expect(reject(() => false, [1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
});
