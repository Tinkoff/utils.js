import toArray from '../toArray';

describe('utils/array/toArray', () => {
    it('should return array', () => {
        expect(toArray([1, 2, 3])).toEqual([1, 2, 3]);
        expect(toArray(null)).toEqual([null]);
        expect(toArray({ a: 1 })).toEqual([{ a: 1 }]);
        expect(toArray('test')).toEqual(['test']);
        expect(toArray({ 0: 'a', 1: 'b', 2: 'c', length: 3 })).toEqual(['a', 'b', 'c']);
    });
});
