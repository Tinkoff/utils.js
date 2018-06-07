import prop from '../prop';

describe('utils/object/prop', () => {
    it('should return undefined if prop is not set', () => {
        expect(prop('test', undefined)).toBeUndefined();
        expect(prop('test', null)).toBeUndefined();
        expect(prop('test', '123')).toBeUndefined();
        expect(prop('test', { a: 1, b: 2 })).toBeUndefined();
        expect(prop('test', [1, 2, 3])).toBeUndefined();
    });

    it('should return prop', () => {
        expect(prop('test', { test: 'a', test1: 'b' })).toBe('a');

        function A() {}
        A.prototype.test = 'c';
        expect(prop('test', new A())).toBe('c');
    });
});
