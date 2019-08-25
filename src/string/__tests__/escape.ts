import escape from '../escape';

describe('utils/string/escape', () => {
    it('escape characters <>&\'"', () => {
        expect(escape('test1 &')).toBe('test1 &amp;');
        expect(escape('test2 <>')).toBe('test2 &lt;&gt;');
        expect(escape('test3 "\'')).toBe('test3 &quot;&#39;');
        expect(escape('test4')).toBe('test4');
    });
});
