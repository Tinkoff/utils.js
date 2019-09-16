import clone from '../clone';
const { createElement, memo } = require('react');

describe('utils/clone', () => {
    it('should return copy of all nested objects', () => {
        const arr = [1, 2, { b: 8 }];
        const date = new Date();
        const obj = { a: { b: { c: 1 } }, d: date, t: 'test', arr, b: true };
        const result = clone(obj);

        expect(result).not.toBe(obj);
        expect(result).toEqual(obj);
        expect(result.a.b).not.toBe(obj.a.b);
        expect(result.a.b).toEqual(obj.a.b);
        expect(result.d).not.toBe(date);
        expect(result.d).toEqual(date);
        expect(result.arr).not.toBe(arr);
        expect(result.arr).toEqual(arr);
        expect(result.arr[2]).not.toBe(arr[2]);
        expect(result.arr[2]).toEqual(arr[2]);
    });

    it('should copy regexp', () => {
        const regex1 = /test123/gm;
        const regex2 = /reg+/iuy;

        const obj = { regex1, regex2 };
        const result = clone(obj);

        expect(result.regex1).not.toBe(regex1);
        expect(result.regex1).toEqual(regex1);

        expect(result.regex2).not.toBe(regex2);
        expect(result.regex2).toEqual(regex2);
    });

    it('should not copy react elements', () => {
        const elem = createElement('i');
        const memElem = memo(() => createElement('i'));

        const obj = { elem, memElem };
        const result = clone(obj);

        expect(result).toEqual(obj);
        expect(result).not.toBe(obj);

        expect(result.elem).toBe(elem);
        expect(result.memElem).toBe(memElem);
    });

    it('should copy class', () => {
        class User {
            constructor(public firstName: string, public lastName: string) { }
        }

        const obj = { user: new User('Tom', 'John') }
        const result = clone(obj);

        expect(result).toEqual(obj);
        expect(result.user).not.toBe(obj.user);
    })
});
