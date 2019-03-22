import trimLeft from '../trimLeft';

describe('utils/string/trimLeft', () => {
    it('test', () => {
        expect(trimLeft('test')).toBe('test');
        expect(trimLeft('  aa ge \n')).toBe('aa ge \n');
    });
});
