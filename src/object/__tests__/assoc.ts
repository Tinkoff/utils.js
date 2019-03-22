import assoc from '../assoc';

describe('utils/object/assoc', () => {
    it('test', () => {
        expect(assoc('a', 3, { b: 2 })).toEqual({ a: 3, b: 2 });
        expect(assoc('a', 5, { a: 1 })).toEqual({ a: 5 });
    });
});
