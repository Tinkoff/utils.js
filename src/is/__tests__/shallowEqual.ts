import shallowEqual from '../shallowEqual';

describe('is/shallowEqual', () => {
    it('test', () => {
        const obj = { a: { b: 2 } };

        expect(shallowEqual(1, 1)).toBe(true);
        expect(shallowEqual(1, 2)).toBe(false);
        expect(shallowEqual({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true);
        expect(shallowEqual({ a: 1, b: 3 }, { a: 1, b: 2 })).toBe(false);
        expect(shallowEqual({ a: { b: 1 } }, { a: { b: 1 } })).toBe(false);
        expect(shallowEqual(obj, obj)).toBe(true);
        expect(shallowEqual([obj, 2], [obj, 2]));
        expect(
            shallowEqual(
                { a: 1 },
                Object.create({ a: 1 }, { b: { value: 1, enumerable: true } })
            )
        ).toBe(false);
    });
});
