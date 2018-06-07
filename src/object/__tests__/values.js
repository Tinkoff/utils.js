import values from '../values';

describe('utils/object/values', () => {
    it('test', () => {
        expect(values({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3]);
        expect(values({})).toEqual([]);
    });
});
