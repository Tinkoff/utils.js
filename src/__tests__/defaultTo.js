import defaultTo from '../defaultTo';

describe('utils/defaultTo', () => {
    it('test defaultTo', () => {
        const d = defaultTo(42);

        expect(d(3)).toBe(3);
        expect(d(null)).toBe(42);
        expect(d(0 / 0)).toBe(42);
        expect(defaultTo(38, 22)).toBe(22);
        expect(d('test')).toBe('test');
    });
});
