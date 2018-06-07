import includes from '../includes';

describe('utils/array/includes', () => {
    it('test includes for array', () => {
        expect(includes(1, [2, 1, 3])).toBe(true);
        expect(includes(5, [2, 1, 3])).toBe(false);
        expect(includes(3)([])).toBe(false);
    });

    it('test includes for strings', () => {
        expect(includes('test', 'aaatestbbbb')).toBe(true);
        expect(includes('test', 'aaaaa')).toBe(false);
        expect(includes('test')('')).toBe(false);
    });
});
