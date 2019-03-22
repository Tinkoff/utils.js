import toLower from '../toLower';

describe('utils/string/toLower', () => {
    it('should return lower-case string', () => {
        expect(toLower('AaaAA')).toBe('aaaaa');
        expect(toLower('abcde')).toBe('abcde');
        expect(toLower('123ABC')).toBe('123abc');
    });
});
