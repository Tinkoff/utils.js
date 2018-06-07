import repeat from '../repeat';

describe('utils/string/repeat', () => {
    it('should return repeted symbol', () => {
        expect(repeat(4, 't')).toEqual('tttt');
        expect(repeat(4, ')')).toEqual('))))');
        expect(repeat(0, ')')).toEqual('');
        expect(repeat(0, 1)).toEqual('');
        expect(repeat(3, {})).toEqual('');
    });
});
