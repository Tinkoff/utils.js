import uniqueId from '../uniqueId';

describe('utils/uniqueId', () => {
    it('should return different ids', () => {
        const a = uniqueId();
        const b = uniqueId();

        expect(a).toBeDefined();
        expect(b).toBeDefined();
        expect(a).not.toEqual(b);
    });
});
