declare module '@tinkoff/utils/array/adjust' {
  import { adjust } from 'ramda';
  const _adjust: typeof adjust;
  export default _adjust;
}

declare module '@tinkoff/utils/array/all' {
  import { all } from 'ramda';
  const _all: typeof all;
  export default _all;
}

declare module '@tinkoff/utils/array/any' {
  import { any } from 'ramda';
  const _any: typeof any;
  export default _any;
}

declare module '@tinkoff/utils/array/append' {
  import { append } from 'ramda';
  const _append: typeof append;
  export default _append;
}

declare module '@tinkoff/utils/array/concat' {
  import { concat } from 'ramda';
  const _concat: typeof concat;
  export default _concat;
}

declare module '@tinkoff/utils/array/difference' {
  import { difference } from 'ramda';
  const _difference: typeof difference;
  export default _difference;
}

declare module '@tinkoff/utils/array/drop' {
  import { drop } from 'ramda';
  const _drop: typeof drop;
  export default _drop;
}

declare module '@tinkoff/utils/array/dropLast' {
  import { dropLast } from 'ramda';
  const _dropLast: typeof dropLast;
  export default _dropLast;
}

declare module '@tinkoff/utils/array/dropWhile' {
  import { dropWhile } from 'ramda';
  const _dropWhile: typeof dropWhile;
  export default _dropWhile;
}

declare module '@tinkoff/utils/array/each' {
  interface each {
    <TItem>(
      fn: (item: TItem, index: number, arr: TItem[]) => void,
      arr?: TItem[]
    ): void;
    <TItem>(
      fn: (item: TItem, index: number, arr: TItem[]) => void
    ): (arr?: TItem[]) => void;
  }
  export default each;
}

declare module '@tinkoff/utils/array/filter' {
  import { filter } from 'ramda';
  const _filter: typeof filter;
  export default _filter;
}

declare module '@tinkoff/utils/array/find' {
  import { find } from 'ramda';
  const _find: typeof find;
  export default _find;
}

declare module '@tinkoff/utils/array/findIndex' {
  import { findIndex } from 'ramda';
  const _findIndex: typeof findIndex;
  export default _findIndex;
}

declare module '@tinkoff/utils/array/findLast' {
  import { findLast } from 'ramda';
  const _findLast: typeof findLast;
  export default _findLast;
}

declare module '@tinkoff/utils/array/flatten' {
  import { flatten } from 'ramda';
  const _flatten: typeof flatten;
  export default _flatten;
}

declare module '@tinkoff/utils/array/head' {
  import { head } from 'ramda';
  const _head: typeof head;
  export default _head;
}

declare module '@tinkoff/utils/array/includes' {
  interface includes {
    <TValue>(value: TValue, array: TValue[]): boolean;
    <TValue>(value: TValue): (array: TValue[]) => boolean;
  }
  export default includes;
}

declare module '@tinkoff/utils/array/indexBy' {
  import { indexBy } from 'ramda';
  const _indexBy: typeof indexBy;
  export default _indexBy;
}

declare module '@tinkoff/utils/array/indexOf' {
  import { indexOf } from 'ramda';
  const _indexOf: typeof indexOf;
  export default _indexOf;
}

declare module '@tinkoff/utils/array/init' {
  import { init } from 'ramda';
  const _init: typeof init;
  export default _init;
}

declare module '@tinkoff/utils/array/intersection' {
  import { intersection } from 'ramda';
  const _intersection: typeof intersection;
  export default _intersection;
}

declare module '@tinkoff/utils/array/join' {
  import { join } from 'ramda';
  const _join: typeof join;
  export default _join;
}

declare module '@tinkoff/utils/array/last' {
  import { last } from 'ramda';
  const _last: typeof last;
  export default _last;
}

declare module '@tinkoff/utils/array/length' {
  import { length } from 'ramda';
  const _length: typeof length;
  export default _length;
}

declare module '@tinkoff/utils/array/map' {
  import { map } from 'ramda';
  const _map: typeof map;
  export default _map;
}

declare module '@tinkoff/utils/array/maxBy' {
  import { maxBy } from 'ramda';
  const _maxBy: typeof maxBy;
  export default _maxBy;
}

declare module '@tinkoff/utils/array/nth' {
  import { nth } from 'ramda';
  const _nth: typeof nth;
  export default _nth;
}

declare module '@tinkoff/utils/array/partition' {
  import { partition } from 'ramda';
  const _partition: typeof partition;
  export default _partition;
}

declare module '@tinkoff/utils/array/pluck' {
  import { pluck } from 'ramda';
  const _pluck: typeof pluck;
  export default _pluck;
}

declare module '@tinkoff/utils/array/range' {
  import { range } from 'ramda';
  const _range: typeof range;
  export default _range;
}

declare module '@tinkoff/utils/array/reduce' {
  import { reduce } from 'ramda';
  const _reduce: typeof reduce;
  export default _reduce;
}

declare module '@tinkoff/utils/array/reduceWhile' {
  import { reduceWhile } from 'ramda';
  const _reduceWhile: typeof reduceWhile;
  export default _reduceWhile;
}

declare module '@tinkoff/utils/array/reject' {
  import { reject } from 'ramda';
  const _reject: typeof reject;
  export default _reject;
}

declare module '@tinkoff/utils/array/remove' {
  import { remove } from 'ramda';
  const _remove: typeof remove;
  export default _remove;
}

declare module '@tinkoff/utils/array/repeat' {
  import { repeat } from 'ramda';
  const _repeat: typeof repeat;
  export default _repeat;
}

declare module '@tinkoff/utils/array/reverse' {
  import { reverse } from 'ramda';
  const _reverse: typeof reverse;
  export default _reverse;
}

declare module '@tinkoff/utils/array/shuffle' {
  export default function <TItem>(array: TItem[]): TItem[];
}

declare module '@tinkoff/utils/array/slice' {
  import { slice } from 'ramda';
  const _slice: typeof slice;
  export default _slice;
}

declare module '@tinkoff/utils/array/sort' {
  import { sort } from 'ramda';
  const _sort: typeof sort;
  export default _sort;
}

declare module '@tinkoff/utils/array/sortBy' {
  import { sortBy } from 'ramda';
  const _sortBy: typeof sortBy;
  export default _sortBy;
}

declare module '@tinkoff/utils/array/splitEvery' {
  import { splitEvery } from 'ramda';
  const _splitEvery: typeof splitEvery;
  export default _splitEvery;
}

declare module '@tinkoff/utils/array/stableSortBy' {
  import { sort } from 'ramda';
  const _stableSortBy: typeof sort;
  export default _stableSortBy;
}

declare module '@tinkoff/utils/array/sum' {
  import { sum } from 'ramda';
  const _sum: typeof sum;
  export default _sum;
}

declare module '@tinkoff/utils/array/tail' {
  import { tail } from 'ramda';
  const _tail: typeof tail;
  export default _tail;
}

declare module '@tinkoff/utils/array/take' {
  import { take } from 'ramda';
  const _take: typeof take;
  export default _take;
}

declare module '@tinkoff/utils/array/takeRightWhile' {
  interface takeRightWhile {
    <TType extends string | any[]>(fn: (item: TType[0]) => any, item?: TType): TType;
    <TType extends string | any[]>(fn: (item: TType[0]) => any): (item?: TType) => TType;
  }
  export default takeRightWhile;
}

declare module '@tinkoff/utils/array/toArray' {
  export default function <TItem>(val: TItem[] | TItem | ArrayLike<TItem>): TItem[];
}

declare module '@tinkoff/utils/array/uniq' {
  import { uniq } from 'ramda';
  const _uniq: typeof uniq;
  export default _uniq;
}

declare module '@tinkoff/utils/array/uniqBy' {
  import { uniqBy } from 'ramda';
  const _uniqBy: typeof uniqBy;
  export default _uniqBy;
}

declare module '@tinkoff/utils/array/update' {
  import { update } from 'ramda';
  const _update: typeof update;
  export default _update;
}

declare module '@tinkoff/utils/array/without' {
  import { without } from 'ramda';
  const _without: typeof without;
  export default _without;
}

declare module '@tinkoff/utils/array/zip' {
  import { zip } from 'ramda';
  const _zip: typeof zip;
  export default _zip;
}

declare module '@tinkoff/utils/array/zipWith' {
  import { zipWith } from 'ramda';
  const _zipWith: typeof zipWith;
  export default _zipWith;
}

