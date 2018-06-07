import type from '../type';

describe('utils/type', () => {
    it('should return type', () => {
        expect(type(undefined)).toBe('Undefined');
        expect(type(null)).toBe('Null');
        expect(type(-3)).toBe('Number');
        expect(type('num')).toBe('String');
        expect(type(new Date())).toBe('Date');
        expect(type({ a: 1 })).toBe('Object');
        expect(type([1, 2, 3])).toBe('Array');
        expect(type(/123/g)).toBe('RegExp');
        expect(type(false)).toBe('Boolean');
    });
});
