import { expectType } from 'ts-expect';
import has from '../has';

describe('utils/object/has', () => {
    it('test', () => {
        expect(has('a', null)).toBe(false);
        expect(has('a', undefined)).toBe(false);
        expect(has('a', 'ijfwfa')).toBe(false);
        expect(has('a', { a: 5 })).toBe(true);
        expect(has('a', {})).toBe(false);
        expect(has('a', 'a')).toBe(false);

        function C() {}

        C.prototype = { a: 5 };
        expect(has('a', new C())).toBe(false);
    });

    it('should have `false` type for `undefined` and `null` inputs', () => {
        expectType<false>(has('a', null));
        expectType<false>(has('a')(null));
        expectType<false>(has('a', undefined));
        expectType<false>(has('a')(undefined));
    });

    it('should exclude `null` and `undefined` from union', () => {
        const something = { id: 12 } as { id: number } | null | undefined;
        
        if (has('name', something)) {
            expectType<{ id: number; name: unknown }>(something);
        }

        const hasId = has('id');
        if(hasId(something)) {
            expectType<{ id: number }>(something);
        }
    });

    it('should narrow union', () => {
        const something = { id: 12 } as { id: number } | { name: string } | { name: string; somethingElse: string };
        
        if (has('name', something)) {
            expectType<{ name: string } | { name: string; somethingElse: string }>(something);
        }
        const hasName = has('name');
        if (hasName(something)) {
            expectType<{ name: string } | { name: string; somethingElse: string }>(something);
        }
        
        if (has('id', something)) {
            expectType<{ id: number }>(something);
        }
        const hasId = has('id');
        if (hasId(something)) {
            expectType<{ id: number }>(something);
        }
    });

    it('should add missing property as `unknown`', () => {
        const something = { id: 12 } as { id: number } | { name: string };
        
        if (has('missing', something)) {
            expectType<({ name: string } | { id: number }) & { missing: unknown }>(something);
        }
        const hasMissing = has('missing');
        if (hasMissing(something)) {
            expectType<({ name: string } | { id: number }) & { missing: unknown }>(something);
        }
    });
});
