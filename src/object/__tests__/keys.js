import keys from '../keys';

describe('utils/object/keys', () => {
    it('test', () => {
        expect(keys({})).toEqual([]);
        expect(keys({ a: 1, b: 2 })).toEqual(['a', 'b']);
    });
});
