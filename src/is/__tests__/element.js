import isElement from '../element';

describe('utils/is/element', () => {
    it('should return true for dom elements', () => {
        expect(isElement(document.createElement('div'))).toBe(true);
        expect(isElement(document.body)).toBe(true);
    });

    it('should return false otherwise', () => {
        expect(isElement(5)).toBe(false);
        expect(isElement(undefined)).toBe(false);
        expect(isElement(null)).toBe(false);
        expect(isElement({})).toBe(false);
        expect(isElement({ nodeType: 1 })).toBe(false);
        expect(isElement('<div></div>')).toBe(false);
        expect(isElement('nodeType=1')).toBe(false);
        expect(isElement(/123/)).toBe(false);
        expect(isElement(new Date())).toBe(false);
    });
});
