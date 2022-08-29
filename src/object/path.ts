import type { Prop, Paths } from "../typings/types";

type If<B, F, S> = B extends true ? F : S;
type Or<B1, B2> = B1 extends true ? true : B2;
type Not<B> = B extends true ? false : true;
type Has<U extends any, U1 extends any> = [U1] extends [U] ? true : false;

type IsExactKey<T> = string extends T
  ? false
  : number extends T
  ? false
  : symbol extends T
  ? false
  : true;

type ValueByPath<P, O, U = false> = P extends readonly [infer F, ...(infer R)]
  ? /**
     * In case we accessed optional property of O on the previous step
     * O can be `undefined`. keyof operator won't work on a union
     */
    Or<Has<O, null>, Has<O, undefined>> extends infer HasNullOrUndefined
    ? Exclude<O, undefined | null> extends infer O2
      ? O2 extends object
        ? F extends keyof O2
          ? R extends []
            ? If<Or<U, HasNullOrUndefined>, O2[F] | undefined, O2[F]>
            : ValueByPath<
                R,
                O2[F],
                Or<
                    Or<U, HasNullOrUndefined>,
                    /**
                     * In case we run into some kind of dynamic dictionary
                     * something like Record<string, ..> or Record<number, ..>
                     * We want to make sure that we get T | undefined instead of T as a result
                     */
                    Not<IsExactKey<keyof O2>>
                >
              >
          : undefined
        : never
      : never
    : never
  : never;

export interface Path {
    /**
     * Retrieve the value at a given path.
     * Use `as const` cast on the `paths` for type inference.
     *
     * @param {[String]} paths The path to use.
     * @param {Object} obj The object to retrieve the nested property from.
     * @return {*} The data at `path`.
     * @example
     *
     *      path(['a', 'b'], {a: {b: 2}}); //=> 2
     *      path(['a', 'b'], {c: {b: 2}}); //=> undefined
     */
    (pathToProp: Prop[], obj: object): unknown;
    /**
     * Retrieve the value at a given path.
     * Use `as const` cast on the `paths` for type inference.
     *
     * @param {[String]} paths The path to use.
     * @return {*} function to get data at `path` for a given object
     * @example
     *
     *      path(['a', 'b'])({a: {b: 2}}); //=> 2
     *      path(['a', 'b'])({c: {b: 2}}); //=> undefined
     */
    (pathToProp: Prop[]): (obj: object) => unknown;
    /**
     * @deprecated
     * Please use `path` without type parameters instead.
     * Make sure to use `as const` cast for props array for type inference
     * @example
     *
     *      path(['a', 'b'] as const, { a: { b: 2 } });
     */
    <T>(pathToProp: Prop[], obj: object): T | undefined;
    /**
     * @deprecated
     * Please use `path` without type parameters instead.
     * Make sure to use `as const` cast for props array for type inference
     * @example
     *
     *      path(['a', 'b'] as const)({ a: { b: 2 } });
     */
    <T>(pathToProp: Prop[]): (obj: object) => T | undefined;
    /**
     * Retrieve the value at a given path.
     *
     * @param {[String]} paths The path to use.
     * @param {Object} obj The object to retrieve the nested property from.
     * @return {*} The data at `path`.
     * @example
     *
     *      const johnDoe = {
     *          fio: {
     *              firstName: 'John',
     *              lastName: 'Doe',
     *          },
     *      };
     *      const firstName = path(['fio', 'firstName'] as const, johnDoe); // => 'John'
     */
    <P extends Paths, O>(pathToProp: P, obj: O): ValueByPath<P, O>;
    /**
     * Retrieve the value at a given path.
     *
     * @param {[String]} paths The path to use.
     * @return {*} function to get data at `path` for a given object
     * @example
     *
     *      const johnDoe = {
     *          fio: {
     *              firstName: 'John',
     *              lastName: 'Doe',
     *          },
     *      };
     *      const getLastName = path(['fio', 'lastName'] as const);
     *      const lastName = getLastName(johnDoe); // => 'Doe'
     */
    <P extends Paths>(pathToProp: P): <O>(obj: O) => ValueByPath<P, O>;
};

import curryN from "../function/curryN";

const _path = <K extends Prop, O extends Record<K, any>>(
  paths: Paths = [],
  obj: O = {} as any
) => {
  let val = obj;

  for (let i = 0; i < paths.length; i++) {
    if (val == null) {
      return undefined;
    }

    val = val[paths[i]];
  }

  return val;
};

export default curryN(2, _path) as Path;
