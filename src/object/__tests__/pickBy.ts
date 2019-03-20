import pickBy from '../pickBy';

describe('utils/object/pickBy', () => {
    it('should return new object with properties accorindg predicate', () => {
        expect(pickBy(() => false, { a: 1, b: 2 })).toEqual({});
        expect(pickBy(() => true, { a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
        expect(pickBy((x) => x > 1)({ a: 1, b: 2 })).toEqual({ b: 2 });
    });
});

const a = pickBy((x, k, v) => false);
const b = a({ a: 1, b: 2 });
