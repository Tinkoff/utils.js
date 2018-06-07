import stableSortBy from '../stableSortBy';
import path from '../../object/path';

describe('stableSortBy', () => {
    it('sorts the array according to the supplied function and keeping the order of elements', () => {
        const people = [
            { name: 'Ann', age: 20 },
            { name: 'Gary', age: 20 },
            { name: 'John', age: 17 },
            { name: 'Sam', age: 21 },
            { name: 'Bob', age: 17 }
        ];
        const actual = stableSortBy(path(['age']), people);
        const expected = [
            { name: 'John', age: 17 },
            { name: 'Bob', age: 17 },
            { name: 'Ann', age: 20 },
            { name: 'Gary', age: 20 },
            { name: 'Sam', age: 21 }
        ];

        expect(actual).toEqual(expected);
    });
});
