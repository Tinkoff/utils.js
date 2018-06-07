import propEq from '../propEq';

describe('utils/object/propEq', () => {
    it('should return true if prop is equal to value', () => {
        expect(propEq('a', 1, { a: 1 })).toBe(true);
        function A() {}
        A.prototype.a = 5;
        expect(propEq('a', 5, new A())).toBe(true);
    });

    it('should return false otherwise', () => {
        expect(propEq('a', 1, { a: 2, b: 3 })).toBe(false);
        expect(propEq('a', 1, {})).toBe(false);
        expect(propEq('a', 1, undefined)).toBe(false);
        expect(propEq('a', 1, '123')).toBe(false);
    });
});
