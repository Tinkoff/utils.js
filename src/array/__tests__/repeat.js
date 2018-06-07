import repeat from '../repeat';

describe('utils/array/repeat', () => {
    it('should return array', () => {
        expect(repeat(4, 't')).toEqual(['t', 't', 't', 't']);
        expect(repeat(0, 1)).toEqual([]);
        expect(repeat(3, {})).toEqual([{}, {}, {}]);
    });
});
