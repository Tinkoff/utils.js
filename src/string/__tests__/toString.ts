import toString from '../toString';

describe('utils/string/toString', () => {
    it('test', () => {
        expect(toString(null)).toBe('');
        expect(toString(5)).toBe('5');
        expect(toString('testStr')).toBe('testStr');
        expect(toString([1, 2, 3, 4])).toBe('1,2,3,4');
    });
});
