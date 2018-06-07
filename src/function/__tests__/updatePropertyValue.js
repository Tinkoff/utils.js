import updatePropertyValue from '../updatePropertyValue';

describe('utils/function/updatePropertyValue', () => {
    const checkPropertyChange = (obj, propName, propValue, expectValue) => {
        const updatedObj = updatePropertyValue(propName, propValue, obj);

        expect(obj[propName]).toBe(expectValue);
        expect(updatedObj[propName]).toBe(expectValue);
    };

    it('should change name in function', () => {
        const fn = () => {};

        checkPropertyChange(fn, 'name', 'newFn', 'newFn');
    });

    it('should change other property in function', () => {
        const fn = () => {};

        fn.i = 'fn';
        checkPropertyChange(fn, 'i', 'newFn', 'newFn');
    });

    it('should change other property in object', () => {
        const obj = {};

        obj.field = 'field';
        checkPropertyChange(obj, 'field', 'newField', 'newField');
    });
});
