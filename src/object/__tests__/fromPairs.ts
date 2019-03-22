import fromPairs from '../fromPairs';

describe('utils/object/fromPairs', () => {
    it('should return object', () => {
        expect(fromPairs([['a', 1], ['b', 2], ['c', 3]])).toEqual({ a: 1, b: 2, c: 3 });
    });
});
