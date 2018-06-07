import any from '../any';

describe('utils/array/any', () => {
    it('test', () => {
        expect(any(x => x > 3, [1, 2, 3])).toBe(false);
        expect(any(x => x > 3, [1, 2, 3, 4])).toBe(true);
        expect(any(x => true, [])).toBe(false);
    });
});
