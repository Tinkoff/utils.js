import all from '../all';

describe('utils/array/all', () => {
    it('test', () => {
        expect(all(x => x > 1, [1, 2, 3])).toBe(false);
        expect(all(x => x < 5, [1, 2, 3, 4])).toBe(true);
        expect(all(x => true, [])).toBe(true);
    });
});
