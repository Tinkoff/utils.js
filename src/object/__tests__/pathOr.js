import pathOr from '../pathOr';

describe('utils/object/pathOr', () => {
    it('test', () => {
        expect(pathOr(['a', 'b'], 3, { a: { b: 2 } })).toBe(2);
        expect(pathOr(['a', 'b'], 3, { a: {} })).toBe(3);
        expect(pathOr(['a'], 3, { a: { b: 2 } })).toEqual({ b: 2 });
    });

    it('undefined', () => {
        expect(pathOr(['a', 'b'], 9, undefined)).toBe(9);
    });
});
