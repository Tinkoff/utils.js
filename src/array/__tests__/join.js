import join from '../join';

describe('utils/array/join', () => {
    it('should return string with separated elements', () => {
        expect(join('|', [1, 2, 3])).toBe('1|2|3');
        expect(join('/', ['a', 'b', 'c'])).toBe('a/b/c');
        expect(join(',', [])).toBe('');
    });
});
