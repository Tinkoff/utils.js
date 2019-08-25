import pathEq from '../pathEq';

describe('utils/object/pathEq', () => {
    it('check is nested property is equal to value', () => {
        expect(pathEq(['a', 'b'], 1, { a: { b: 1 } })).toBe(true);
        expect(pathEq(['a', 'b'], 2, { a: { b: 3 } })).toBe(false);
        expect(pathEq(['a', 'b'], 3, {})).toBe(false);
    });
});
