import always from '../always';

describe('utils/function/always', () => {
    it('should return new function', () => {
        const f = always('test');

        expect(typeof f).toBe('function');
        expect(f()).toBe('test');
        expect(f()).toBe('test');
    });
});
