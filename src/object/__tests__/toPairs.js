import toPairs from '../toPairs';

describe('utils/object/toPairs', () => {
    it('should return array', () => {
        expect(toPairs({ a: 1, b: 2, c: 3 })).toEqual([['a', 1], ['b', 2], ['c', 3]]);
    });
});
