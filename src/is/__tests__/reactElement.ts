import isReactElement from '../reactElement';
const { createElement, PureComponent } = require('react');

class Component extends PureComponent {}

describe('utils/is/reactElement', () => {
    it('test', () => {
        expect(isReactElement('test')).toBe(false);
        expect(isReactElement({})).toBe(false);
        expect(isReactElement(new Component())).toBe(false);
        expect(isReactElement(createElement('i'))).toBe(true);
        expect(isReactElement({ $$typeof: Symbol.for('react.element') })).toBe(true);
    });
});
