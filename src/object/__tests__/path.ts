import { expectType } from 'ts-expect';
import path from '../path';

describe('utils/object/path', () => {
    it('should return nested property', () => {
        expect(path(['a', 'b'], { a: { b: 3 } })).toBe(3);
        expect(path(['a', 'b'], { a: { c: 3 } })).toBeUndefined();
        expect(path(['test'])({ test: 'test' })).toBe('test');
    });

    it('should perform dirty cast when type parameter is provided', () => {
        const obj = { firstName: 'john' } as const;
        const result1 = path<number>(['firstName', 'some-non-existent-prop'], obj);
        const result2 = path<number>(['firstName', 'some-non-existent-prop'])(obj);

        expectType<number | undefined>(result1);
        expectType<number | undefined>(result2);
    });

    it('should infer type as `unknown` by default', () => {
        const obj = { firstName: 'john' } as const;
        const result1 = path(['firstName'], obj);
        const result2 = path(['firstName'])(obj);

        expectType<unknown>(result1);
        expectType<unknown>(result2);
    });

    it('should infer type with a tuple of single value', () => {
        const obj = { firstName: 'john' } as const;
        const result1 = path(['firstName'] as const, obj);
        const result2 = path(['firstName'] as const)(obj);

        expectType<'john'>(result1);
        expectType<'john'>(result2);
    });

    it('should infer type with a tuple of multiple values', () => {
        const obj = { user: { firstName: 'john' } } as const;
        const result1 = path(['user', 'firstName'] as const, obj);
        const result2 = path(['user', 'firstName'] as const)(obj);

        expectType<'john'>(result1);
        expectType<'john'>(result2);
    });

    it('should infer type with a tuple containing arbitrary id for a record', () => {
        const users: Record<string, { name: string }> = {
            'some-id': { name: 'john' }
        }
        const obj = { users } as const;
        const result1 = path(['users', 'some-id', 'name'] as const, obj);
        const result2 = path(['users', 'some-other-id', 'name'] as const)(obj);

        expectType<string | undefined>(result1);
        expectType<string | undefined>(result2);
    });

    it('should infer type with a tuple containing arbitrary index for an array', () => {
        const users = [{ name: 'john' }]
        const obj = { users } as const;
        const result1 = path(['users', 0, 'name'] as const, obj);
        const result2 = path(['users', 1, 'name'] as const)(obj);

        expectType<string | undefined>(result1);
        expectType<string | undefined>(result2);
    });

    it('should infer type with a tuple containing a field with an optional value', () => {
        type User = {
            fio?: {
                firstName: string;
                lastName: string;
            },
        }
        const obj: User = {
            fio: {
                firstName: 'john',
                lastName: 'doe'
            }
        };
        const result1 = path(['fio', 'lastName'] as const, obj);
        const result2 = path(['fio', 'lastName'] as const)(obj);

        expectType<string | undefined>(result1);
        expectType<string | undefined>(result2);
    });

    it('should infer type with a tuple containing a field with a nullable value', () => {
        type User = {
            fio: {
                firstName: string;
                lastName: string;
            } | null,
        }
        const obj: User = {
            fio: {
                firstName: 'john',
                lastName: 'doe'
            }
        };
        const result1 = path(['fio', 'lastName'] as const, obj);
        const result2 = path(['fio', 'lastName'] as const)(obj);

        expectType<string | undefined>(result1);
        expectType<string | undefined>(result2);
    });
});
