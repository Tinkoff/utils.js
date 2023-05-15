import filterMap from '../filterMap';
import map from '../map';
import filter from '../filter';

describe('utils/array/filterMap', () => {
    it('should filter and map arrays', () => {
        expect(
            filterMap(
                () => true,
                (x) => x,
                [1]
            )
        ).toEqual([1]);
        expect(
            filterMap(
                () => false,
                (x) => x,
                [1]
            )
        ).toEqual([]);
        expect(
            filterMap(
                (x) => x > 2,
                (x) => x,
                [1, 2, 3, 4, 5]
            )
        ).toEqual([3, 4, 5]);
        expect(
            filterMap(
                () => false,
                (x) => x,
                [1, 2, 3, 4, 5]
            )
        ).toEqual([]);
        expect(
            filterMap(
                (n) => n % 2 === 0,
                (x) => x * 2,
                [1, 2, 3, 4]
            )
        ).toEqual([4, 8]);
    });

    it('is equivalent to filter + map', () => {
        const isEven = (n) => n % 2 === 0;
        const double = (x) => x * 2;
        const arr = [1, 2, 3, 4];

        expect(filterMap(isEven, double, arr)).toEqual(map(double, filter(isEven, [1, 2, 3, 4])));
    });
});
