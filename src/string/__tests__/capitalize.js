import capitalize from '../capitalize';

describe('utils/string/capitalize', () => {
    it('should capitalize string', () => {
        expect(capitalize('')).toBe('');
        expect(capitalize('a')).toBe('A');
        expect(capitalize('test123')).toBe('Test123');
        expect(capitalize('TEST345')).toBe('Test345');
        expect(capitalize('Test789')).toBe('Test789');
    });
});
