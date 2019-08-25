import propSet from '../propSet';

describe('utils/object/propSet', () => {
    it('test', () => {
        expect(propSet('a', 3, { b: 2 })).toEqual({ a: 3, b: 2 });
        expect(propSet('a', 5, { a: 1 })).toEqual({ a: 5 });
        expect(propSet('a', 4, null)).toEqual({ a: 4 });
    });

    it('should not create new object if value is the same', () => {
        const obj = { a: 1, b: 2 };
        const a = propSet('a', 1, obj);
        const b = propSet('a', 2)(obj);
        const c = propSet('a')('test')(obj);

        expect(a).toBe(obj);
        expect(b).not.toBe(obj);
        expect(c).not.toBe(obj);
        expect(c).toEqual({ a: 'test', b: 2 });
    });
});
