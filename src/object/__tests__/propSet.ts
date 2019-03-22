import propSet from '../propSet';

describe('utils/object/propSet', () => {
    it('test', () => {
        expect(propSet('a', 3, { b: 2 })).toEqual({ a: 3, b: 2 });
        expect(propSet('a', 5, { a: 1 })).toEqual({ a: 5 });
        expect(propSet('a', 4, null)).toEqual({ a: 4 });
    });
});
