import toLower from '../../string/toLower';
import rejectWith from '../rejectWith';

describe('utils/promise/rejectWith', () => {
    it('should reject with transformed value', () => {
        expect(rejectWith(toLower, 'ERROR')).rejects.toBe('error');
    });
    it('should accept more than one parameter', () => {
        expect(rejectWith((x, y) => `${x}${y}`)('ER', 'ROR')).rejects.toBe('ERROR');
    });
});
