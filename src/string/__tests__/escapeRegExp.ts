import escapeRegExp from '../escapeRegExp';

describe('utils/string/escapeRegExp', () => {
    it('escape characters \\ ^ $ . * + ? ( ) [ ] { } |', () => {
        expect(escapeRegExp('no escape strings')).toBe('no escape strings');
        expect(escapeRegExp('[test](utils)')).toBe('\\[test\\]\\(utils\\)');
        expect(escapeRegExp('^{test2}$')).toBe('\\^\\{test2\\}\\$');
        expect(escapeRegExp('. + test ? 1 2 | 3')).toBe('\\. \\+ test \\? 1 2 \\| 3');
    });
});
