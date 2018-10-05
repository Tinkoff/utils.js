import omit from '../omit';

describe('utils/object/omit', () => {
    it('should omit props', () => {
        expect(omit(['a'], { a: 1, b: 2 })).toEqual({ b: 2 });
        expect(omit(['a', 'c', 'd'], { a: 2 })).toEqual({});
        expect(omit([], { a: 3 })).toEqual({ a: 3 });
    });

    it('omit should convert keys to string', () => {
        expect(omit([1, 'a'], { 1: 'a' })).toEqual({});
        expect(omit([2, 'a'], { 2: 2, a: 'a', b: 'b' })).toEqual({ b: 'b' });
    });
});
