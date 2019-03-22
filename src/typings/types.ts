export type Ord = number | string | boolean;

export type ArrBase<T, R> = (value: T, index: number, arr: ArrayLike<T>) => R;
export type ObjBase<K extends Prop, V, R> = (value: V, key: K & string, obj: Record<K, V>) => R;
export type ObjBaseBy<O extends Record<any, any>, R> = (value: O[keyof O], key: keyof O, obj: O) => R;

export type CompareFunc<T, R extends Ord> = (a: T, b: T) => R;
export type OrdFunc<T, R extends Ord> = (item: T) => R;
export type ArrOrdFunc<T, R extends Ord> = ArrBase<T, R>;

export type KeyValuePairs<U extends Prop, V> = Array<[U, V]>;

export type Void<T = any> = (...a: T[]) => void;
export type Void1<T = any> = (a: T) => void;
export type ArrVoid<T = any> = ArrBase<T, void>;
export type ObjVoid<K extends Prop, V> = ObjBase<K, V, void>;

export type Endo<T = any> = (...a: T[]) => T;
export type Endo1<T = any> = (a: T) => T;

export type Pred<T = any> = (...a: T[]) => boolean;
export type Pred1<T = any> = (a: T) => boolean;
export type Pred2<U = any, V = any> = (a: U, b: V) => boolean;
export type ArrPred<T = any> = ArrBase<T, boolean>;
export type ObjPred<K extends Prop, V> = ObjBase<K, V, boolean>;
export type ObjPredBy<O> = ObjBaseBy<O, boolean>;

export type Func<R = any> = (...args) => R;
export type Func1<R = any> = (arg) => R;

export type Prop = keyof any;
export type Paths = ReadonlyArray<Prop>;

export type Pattern = RegExp | string;

// @see https://gist.github.com/donnut/fd56232da58d25ceecf1, comment by @albrow
export interface CurriedTypeGuard2<T1, T2, R extends T2> {
    (t1: T1): (t2: T2) => t2 is R;
    (t1: T1, t2: T2): t2 is R;
}

export interface CurriedTypeGuard3<T1, T2, T3, R extends T3> {
    (t1: T1): CurriedTypeGuard2<T2, T3, R>;
    (t1: T1, t2: T2): (t3: T3) => t3 is R;
    (t1: T1, t2: T2, t3: T3): t3 is R;
}

export interface CurriedTypeGuard4<T1, T2, T3, T4, R extends T4> {
    (t1: T1): CurriedTypeGuard3<T2, T3, T4, R>;
    (t1: T1, t2: T2): CurriedTypeGuard2<T3, T4, R>;
    (t1: T1, t2: T2, t3: T3): (t4: T4) => t4 is R;
    (t1: T1, t2: T2, t3: T3, t4: T4): t4 is R;
}

export interface CurriedTypeGuard5<T1, T2, T3, T4, T5, R extends T5> {
    (t1: T1): CurriedTypeGuard4<T2, T3, T4, T5, R>;
    (t1: T1, t2: T2): CurriedTypeGuard3<T3, T4, T5, R>;
    (t1: T1, t2: T2, t3: T3): CurriedTypeGuard2<T4, T5, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4): (t5: T5) => t5 is R;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): t5 is R;
}

export interface CurriedTypeGuard6<T1, T2, T3, T4, T5, T6, R extends T6> {
    (t1: T1): CurriedTypeGuard5<T2, T3, T4, T5, T6, R>;
    (t1: T1, t2: T2): CurriedTypeGuard4<T3, T4, T5, T6, R>;
    (t1: T1, t2: T2, t3: T3): CurriedTypeGuard3<T4, T5, T6, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4): CurriedTypeGuard2<T5, T6, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): (t6: T6) => t6 is R;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): t6 is R;
}

export interface CurriedFunction2<T1, T2, R> {
    (t1: T1): (t2: T2) => R;
    (t1: T1, t2: T2): R;
}

export interface CurriedFunction3<T1, T2, T3, R> {
    (t1: T1): CurriedFunction2<T2, T3, R>;
    (t1: T1, t2: T2): (t3: T3) => R;
    (t1: T1, t2: T2, t3: T3): R;
}

export interface CurriedFunction4<T1, T2, T3, T4, R> {
    (t1: T1): CurriedFunction3<T2, T3, T4, R>;
    (t1: T1, t2: T2): CurriedFunction2<T3, T4, R>;
    (t1: T1, t2: T2, t3: T3): (t4: T4) => R;
    (t1: T1, t2: T2, t3: T3, t4: T4): R;
}

export interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
    (t1: T1): CurriedFunction4<T2, T3, T4, T5, R>;
    (t1: T1, t2: T2): CurriedFunction3<T3, T4, T5, R>;
    (t1: T1, t2: T2, t3: T3): CurriedFunction2<T4, T5, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4): (t5: T5) => R;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
}

export interface CurriedFunction6<T1, T2, T3, T4, T5, T6, R> {
    (t1: T1): CurriedFunction5<T2, T3, T4, T5, T6, R>;
    (t1: T1, t2: T2): CurriedFunction4<T3, T4, T5, T6, R>;
    (t1: T1, t2: T2, t3: T3): CurriedFunction3<T4, T5, T6, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction2<T5, T6, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): (t6: T6) => R;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): R;
}
