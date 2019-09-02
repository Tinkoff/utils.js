const { createElement, PureComponent } = require('react');

let mockReactIs;

jest.mock('react-is', () => mockReactIs);

class Component extends PureComponent {}

describe('utils/is/reactElement', () => {
    beforeEach(() => {
        jest.resetModules();
    });

    it('test', () => {
        mockReactIs = require.requireActual('react-is');
        const isReactElement = require('../reactElement');

        expect(isReactElement('test')).toBe(false);
        expect(isReactElement({})).toBe(false);
        expect(isReactElement(new Component())).toBe(false);
        expect(isReactElement(createElement('i'))).toBe(true);
        expect(isReactElement({ $$typeof: Symbol.for('react.element') })).toBe(true);
    });

    it('test when is-react not defined', () => {
        mockReactIs = null;
        const isReactElement = require('../reactElement');

        expect(isReactElement('test')).toBe(false);
        expect(isReactElement({})).toBe(false);
        expect(isReactElement(new Component())).toBe(false);
        expect(isReactElement(createElement('i'))).toBe(true);
        expect(isReactElement({ $$typeof: Symbol.for('react.element') })).toBe(true);
    });
});
