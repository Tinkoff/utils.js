import identity from '../identity';

describe('utils/function/identity', () => {
    it('should return passed argument', () => {
        expect(identity(5)).toBe(5);
        expect(identity('test')).toBe('test');
        const obj = {};

        expect(identity(obj)).toBe(obj);
    });
});
