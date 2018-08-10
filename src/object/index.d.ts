declare module '@tinkoff/utils/object/all' {
  import { all } from 'ramda';
  const _all: typeof all;
  export default _all;
}

declare module '@tinkoff/utils/object/any' {
  import { any } from 'ramda';
  const _any: typeof any;
  export default _any;
}

declare module '@tinkoff/utils/object/assoc' {
  import { assoc } from 'ramda';
  const _assoc: typeof assoc;
  export default _assoc;
}

declare module '@tinkoff/utils/object/each' {
  import { forEachObjIndexed } from 'ramda';
  const _each: typeof forEachObjIndexed;
  export default _each;
}

declare module '@tinkoff/utils/object/eqProps' {
  import { eqProps } from 'ramda';
  const _eqProps: typeof eqProps;
  export default _eqProps;
}

declare module '@tinkoff/utils/object/filter' {
  import { filter } from 'ramda';
  const _filter: typeof filter;
  export default _filter;
}

declare module '@tinkoff/utils/object/findKey' {
  interface findKey {
    <T>(fn: (value: T, key: string, obj: Record<string, T>) => any, obj: Record<string, T>): string;
    <T>(fn: (value: T, key: string, obj: Record<string, T>) => any): (obj: Record<string, T>) => string;
  }
  export default findKey;
}

declare module '@tinkoff/utils/object/fromPairs' {
  import { fromPairs } from 'ramda';
  const _fromPairs: typeof fromPairs;
  export default _fromPairs;
}

declare module '@tinkoff/utils/object/groupBy' {
  import { groupBy } from 'ramda';
  const _groupBy: typeof groupBy;
  export default _groupBy;
}

declare module '@tinkoff/utils/object/has' {
  import { has } from 'ramda';
  const _has: typeof has;
  export default _has;
}

declare module '@tinkoff/utils/object/keyBy' {
  interface keyBy {
    <T, R>(
      fn: (value: T, key: string, obj: Record<string, T>) => R,
      obj?: Record<string, T>
    ): Record<string, R>;

    <T, R>(fn: (value: T, key: string, obj: Record<string, T>) => R):
      (obj?: Record<string, T>) => Record<string, R>;
  }
  export default keyBy;
}

declare module '@tinkoff/utils/object/keys' {
  import { keys } from 'ramda';
  const _keys: typeof keys;
  export default _keys;
}

declare module '@tinkoff/utils/object/map' {
  import { map } from 'ramda';
  const _map: typeof map;
  export default _map;
}

declare module '@tinkoff/utils/object/merge' {
  import { merge } from 'ramda';
  const _merge: typeof merge;
  export default _merge;
}

declare module '@tinkoff/utils/object/mergeDeep' {
  import { mergeDeepLeft } from 'ramda';
  const _mergeDeep: typeof mergeDeepLeft;
  export default _mergeDeep;
}

declare module '@tinkoff/utils/object/mergeWith' {
  import { mergeWith } from 'ramda';
  const _mergeWith: typeof mergeWith;
  export default _mergeWith;
}

declare module '@tinkoff/utils/object/objOf' {
  import { objOf } from 'ramda';
  const _objOf: typeof objOf;
  export default _objOf;
}

declare module '@tinkoff/utils/object/omit' {
  import { omit } from 'ramda';
  const _omit: typeof omit;
  export default _omit;
}

declare module '@tinkoff/utils/object/path' {
  import { path } from 'ramda';
  const _path: typeof path;
  export default _path;
}

declare module '@tinkoff/utils/object/pathApply' {
  import path from '@tinkoff/utils/object/path';
  interface pathApply {
    <R>(paths: string[], fn: (arg: ReturnType<typeof path>) => R, obj?): R;
    <R>(paths: string[]): (fn: (arg: ReturnType<typeof path>) => R, obj?) => R;
    <R>(paths: string[]): (fn: (arg: ReturnType<typeof path>) => R) => (obj?) => R;
  }
  export default pathApply;
}

declare module '@tinkoff/utils/object/pathEq' {
  import { pathEq } from 'ramda';
  const _pathEq: typeof pathEq;
  export default _pathEq;
}

declare module '@tinkoff/utils/object/pathOr' {
  import { pathOr } from 'ramda';
  const _pathOr: typeof pathOr;
  export default _pathOr;
}

declare module '@tinkoff/utils/object/pathSet' {
  interface pathSet {
    (paths: string[], value, obj: Record<string, any>): Record<string, any>;
    (paths: string[]): (value, obj: Record<string, any>) => Record<string, any>;
    (paths: string[]): (value) => (obj: Record<string, any>) => Record<string, any>;
  }
  export default pathSet;
}

declare module '@tinkoff/utils/object/pick' {
  import { pick } from 'ramda';
  const _pick: typeof pick;
  export default _pick;
}

declare module '@tinkoff/utils/object/pickBy' {
  import { pickBy } from 'ramda';
  const _pickBy: typeof pickBy;
  export default _pickBy;
}

declare module '@tinkoff/utils/object/prop' {
  import { prop } from 'ramda';
  const _prop: typeof prop;
  export default _prop;
}

declare module '@tinkoff/utils/object/propApply' {
  import prop from '@tinkoff/utils/object/prop';
  interface propApply {
    <R>(propName: string, fn: (arg: ReturnType<typeof prop>) => R, obj): R;
    <R>(propName: string): (fn: (arg: ReturnType<typeof prop>) => R, obj) => R;
    <R>(propName: string): (fn: (arg: ReturnType<typeof prop>) => R) => (obj) => R;
  }
  export default propApply;
}

declare module '@tinkoff/utils/object/propEq' {
  import { propEq } from 'ramda';
  const _propEq: typeof propEq;
  export default _propEq;
}

declare module '@tinkoff/utils/object/propOr' {
  import { propOr } from 'ramda';
  const _propOr: typeof propOr;
  export default _propOr;
}

declare module '@tinkoff/utils/object/reduce' {
  import { reduce } from 'ramda';
  const _reduce: typeof reduce;
  export default _reduce;
}

declare module '@tinkoff/utils/object/size' {
  export default function (arg): number;
}

declare module '@tinkoff/utils/object/toPairs' {
  import { toPairs } from 'ramda';
  const _toPairs: typeof toPairs;
  export default _toPairs;
}

declare module '@tinkoff/utils/object/values' {
  import { values } from 'ramda';
  const _values: typeof values;
  export default _values;
}

declare module '@tinkoff/utils/object/where' {
  import { where } from 'ramda';
  const _where: typeof where;
  export default _where;
}

