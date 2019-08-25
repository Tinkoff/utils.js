import pluck from '../pluck';

describe('pluck', () => {
    it('returns a new list by plucking the same named property off all objects in the list supplied', () => {
        expect(pluck('a', [{ a: 1 }, { a: 2 }])).toEqual([1, 2]);
        expect(pluck(0)([[1, 2], [3, 4]])).toEqual([1, 3]);
    });
});
