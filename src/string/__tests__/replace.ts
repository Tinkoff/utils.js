import replace from '../replace';

describe('utils/string/replace', () => {
    it('should replace by replacement', () => {
        expect(replace('foo', 'bar', 'foo foo foo')).toBe('bar foo foo');
        expect(replace(/foo/g, 'bar', 'foo foo foo')).toBe('bar bar bar');
    });
});
