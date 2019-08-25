import isObject from '../object';

describe('utils/is/object', () => {
    it('test', () => {
        expect(isObject({ a: 5 })).toBe(true);
        expect(isObject({})).toBe(true);
        expect(isObject(new Date())).toBe(true);
        expect(isObject(5)).toBe(false);
        expect(isObject('')).toBe(false);
        expect(isObject(null)).toBe(false);
    });

    it('test type guard', () => {
        const obj: any = { a: 5, b: 3 };

        if (isObject(obj)) {
            expect(obj.a).toBe(5);
        }
    });
});
