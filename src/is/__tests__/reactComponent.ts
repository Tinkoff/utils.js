describe('utils/is/reactComponent', () => {
    const { createElement, PureComponent, memo, lazy } = require('react');

    let mockReactIs;

    jest.mock('react-is', () => mockReactIs);

    class Component extends PureComponent { }

    beforeEach(() => {
        jest.resetModules();
    });

    it('test', () => {
        mockReactIs = require.requireActual('react-is');
        const isReactComponent = require('../reactComponent').default;

        expect(isReactComponent({ test: 'i' })).toBe(false);
        expect(isReactComponent(createElement('i'))).toBe(false);
        expect(isReactComponent({ $$typeof: Symbol.for('react.element') })).toBe(false);
        expect(isReactComponent('test')).toBe(true);
        expect(isReactComponent(() => createElement('i'))).toBe(true);
        expect(isReactComponent(Component)).toBe(true);
        expect(isReactComponent(memo(Component))).toBe(true);
        expect(isReactComponent(lazy(Component))).toBe(true);
    });

    it('test when react-is not defined', () => {
        mockReactIs = null;
        const isReactComponent = require('../reactComponent').default;

        expect(isReactComponent({ test: 'i' })).toBe(false);
        expect(isReactComponent(createElement('i'))).toBe(true);
        expect(isReactComponent({ $$typeof: Symbol.for('react.element') })).toBe(true);
        expect(isReactComponent('test')).toBe(true);
        expect(isReactComponent(() => createElement('i'))).toBe(true);
        expect(isReactComponent(Component)).toBe(true);
        expect(isReactComponent(memo(Component))).toBe(true);
        expect(isReactComponent(lazy(Component))).toBe(true);
    });
});
