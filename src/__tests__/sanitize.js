import sanitize from '../sanitize';

describe('utils/sanitize', () => {
    it('test', () => {
        expect(sanitize('em', 'test123')).toBe('test123');
        expect(sanitize('em', '<em>abc</em>')).toBe('abc');
        expect(sanitize('unknown', '<em>123</em>')).toBe('<em>123</em>');
    });
});
