import comparator from '../comparator';

describe('utils/function/comparator', () => {
    const byAge = comparator((a, b) => a.age < b.age);
    const person1 = {
        age: 10
    };
    const person2 = {
        age: 20
    };
    const people = [
        person2,
        person1,
        {
            age: 44
        },
        {
            age: 33
        }
    ];

    it('should return -1', () => {
        expect(byAge(person1, person2)).toEqual(-1);
    });

    it('should return 1', () => {
        expect(byAge(person2, person1)).toEqual(1);
    });

    it('should sort asc', () => {
        expect(people.sort(byAge)).toEqual(
            [{ age: 10 }, { age: 20 }, { age: 33 }, { age: 44 }]
        );
    });
});
