import isPlainObject from '../plainObject';
const { createElement, memo } = require('react');

describe('utils/is/plainObject', () => {
    it('test', () => {
        expect(isPlainObject({ a: 5 })).toBe(true);
        expect(isPlainObject({})).toBe(true);
        expect(isPlainObject(new Date())).toBe(false);
        expect(isPlainObject(createElement('span'))).toBe(false);
        expect(isPlainObject(memo('span'))).toBe(false);
        expect(isPlainObject(5)).toBe(false);
        expect(isPlainObject('')).toBe(false);
        expect(isPlainObject(null)).toBe(false);
        expect(isPlainObject(Object.create(null))).toBe(true);
    });
});
