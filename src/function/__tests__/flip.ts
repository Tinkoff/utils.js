import flip from '../flip';

describe('utils/function/flip', () => {
    it('should return new function with reversed two first arguments', () => {
        const f: (x: number, y: string) => number = jest.fn((a, b) => a - +b);
        const g = flip(f);

        expect(g('3', 4)).toBe(1);
        expect(f).toBeCalledWith(4, '3');

        expect(g('1', 3, 5, 7)).toBe(2);
        expect(f).toBeCalledWith(3, '1', 5, 7);
    });
});
