import startsWith from '../startsWith';

describe('utils/string/startsWith', () => {
    it('test', () => {
        expect(startsWith('a', 'abc')).toBe(true);
        expect(startsWith('b', 'abc')).toBe(false);
        expect(startsWith('abc', 'abc')).toBe(true);
        expect(startsWith('abcd', 'abc')).toBe(false);
    });
});
