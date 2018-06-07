import propOr from '../propOr';

describe('utils/object/propOr', () => {
    it('should return prop', () => {
        const f = propOr('a', 'wrong');

        expect(f({ a: 1 })).toBe(1);
        expect(f({ a: 2, b: 3 })).toBe(2);

        function A() {}
        A.prototype.a = 'test123';
        expect(f(new A())).toBe('test123');
    });

    it('should return default value', () => {
        const f = propOr('a', 'dflt');

        expect(f({})).toBe('dflt');
        expect(f(null)).toBe('dflt');
        expect(f(undefined)).toBe('dflt');
        expect(f('awfwf')).toBe('dflt');
        expect(f({ dflt: 5 })).toBe('dflt');
    });
});
