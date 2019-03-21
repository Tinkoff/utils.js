import mergeDeep from '../mergeDeep';
const React = require('react');

describe('utils/object/mergeDeep', () => {
    it('should deeply merge objects', () => {
        expect(mergeDeep({ a: 1 }, { a: 2, b: 3 })).toEqual({ a: 2, b: 3 });
        expect(mergeDeep({ a: [1, 2, 3] }, { a: [4, 5, 6, 7], b: 3 })).toEqual({ a: [4, 5, 6, 7], b: 3 });
        expect(mergeDeep({ a: 'test', b: { c: 3, d: 4 } }, { b: { d: 5, f: 8 } })).toEqual({
            a: 'test',
            b: { c: 3, d: 5, f: 8 },
        });
        expect(mergeDeep({ a: 1 }, null)).toEqual({ a: 1 });
        expect(mergeDeep(undefined, { a: 3 })).toEqual({ a: 3 });
    });
    it('should not attempt to merge non-plain objects', () => {
        const oldRegExp = /test/g;
        const oldSpan = React.createElement('span', { prop: 'value' });
        const newRegExp = /test/;
        const newSpan = React.createElement('span', { anotherProp: true });
        const result = mergeDeep({ a: oldSpan, b: oldRegExp }, { a: newSpan, b: newRegExp });

        expect(result.a).toBe(newSpan);
        expect(result.a.props).not.toHaveProperty('prop');
        expect(result.b).toBe(newRegExp);
        expect(result.b.global).not.toBe(true);
    });
});
