import eqProps from '../eqProps';

describe('utils/object/eqProps', () => {
    const o1 = { a: 1, b: 2, c: 4, d: 4 };
    const o2 = { a: 1, b: 20, c: 4, d: 40 };

    it('should return true', () => {
        expect(eqProps('a', o1, o2)).toEqual(true);
        expect(eqProps('c', o1, o2)).toEqual(true);
    });
    it('should return false', () => {
        expect(eqProps('b', o1, o2)).toEqual(false);
        expect(eqProps('d', o1, o2)).toEqual(false);
    });
    it('reports whether two objects have the same value for a given property', () => {
        expect(eqProps('name', { name: 'fred', age: 10 }, { name: 'fred', age: 12 })).toEqual(true);
        expect(eqProps('name', { name: 'fred', age: 10 }, { name: 'fred durst', age: 10 })).toEqual(false);
    });

    it('is curried', () => {
        const sameName = eqProps('name');

        expect(sameName({ name: 'fred', age: 10 }, { name: 'fred', age: 12 })).toEqual(true);
    });
});
