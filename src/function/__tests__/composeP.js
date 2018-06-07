import composeP from '../composeP';

describe('utils/function/composeP', () => {
    const appendP = y => x => Promise.resolve(x * 10 + y);

    it('should compose promise-returning functions', async () => {
        expect(await composeP(
            appendP(2)
        )(1)).toBe(12);

        expect(await composeP(
            appendP(3),
            appendP(2)
        )(1)).toBe(123);

        expect(await composeP(
            appendP(4),
            appendP(3),
            appendP(2)
        )(1)).toBe(1234);

        expect(await composeP(
            appendP(7),
            appendP(6),
            appendP(5),
            appendP(4),
            appendP(3),
            appendP(2)
        )(1)).toBe(1234567);
    });
    it('should be composable', () => {
        const comp1 = composeP(
            appendP(4),
            appendP(3),
            appendP(2)
        );
        const comp2 = composeP(
            appendP(7),
            appendP(6),
            appendP(5)
        );

        return expect(composeP(comp2, comp1)(1)).resolves.toBe(1234567);
    });
});
