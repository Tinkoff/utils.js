import unescape from '../unescape';

describe('utils/string/unescape', () => {
    it('should unescape &amp &lt &gt &quot &#39', () => {
        expect(unescape('test1 &amp;')).toBe('test1 &');
        expect(unescape('test2 &lt;&gt;')).toBe('test2 <>');
        expect(unescape('test3 &quot;&#39;')).toBe('test3 "\'');
        expect(unescape('test4')).toBe('test4');
    });
});
