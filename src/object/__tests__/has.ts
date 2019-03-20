import has from '../has';

describe('utils/object/has', () => {
    it('test', () => {
        expect(has('a', null)).toBe(false);
        expect(has('a', undefined)).toBe(false);
        expect(has('a', 'ijfwfa')).toBe(false);
        expect(has('a', { a: 5 })).toBe(true);
        expect(has('a', {})).toBe(false);
        expect(has('a', 'a')).toBe(false);

        function C() {}

        C.prototype = { a: 5 };
        expect(has('a', new C())).toBe(false);
    });
});
