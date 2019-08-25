import path from '../path';

describe('utils/object/path', () => {
    it('should return nested property', () => {
        expect(path(['a', 'b'], { a: { b: 3 } })).toBe(3);
        expect(path(['a', 'b'], { a: { c: 3 } })).toBeUndefined();
        expect(path(['test'])({ test: 'test' })).toBe('test');
    });
});
