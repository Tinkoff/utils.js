import toUpper from '../toUpper';

describe('utils/string/toUpper', () => {
    it('should return upper-case string', () => {
        expect(toUpper('AaaAA')).toBe('AAAAA');
        expect(toUpper('abcde')).toBe('ABCDE');
        expect(toUpper('123ABC')).toBe('123ABC');
    });
});
