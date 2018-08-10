/* tslint:disable */
declare module '@tinkoff/utils/function/always' {
  export default function <T>(x: T): (...args) => T;
}
declare module '@tinkoff/utils/function/F' {
  export default function (...args): false;
}

declare module '@tinkoff/utils/function/T' {
  export default function (...args): true;
}

declare module '@tinkoff/utils/function/allPass' {
  import { allPass } from 'ramda';
  const _allPass: typeof allPass;
  export default _allPass;
}

declare module '@tinkoff/utils/function/anyPass' {
  import { anyPass, CurriedFunction2 } from 'ramda';
  const _anyPass: typeof anyPass;
  export default _anyPass;
}

declare module '@tinkoff/utils/function/applyOrReturn' {
  interface applyOrReturn {
    <TFunc, T>(args, func: T): T extends (...args) => any ? ReturnType<T> : T;
    (args): <TFunc, T>(func: T) => T extends (...args) => any ? ReturnType<T> : T;
  }
  export default applyOrReturn;
}

declare module '@tinkoff/utils/function/both' {
  import { both } from 'ramda';
  const _both: typeof both;
  export default _both;
}

declare module '@tinkoff/utils/function/comparator' {
  import { comparator } from 'ramda';
  const _comparator: typeof comparator;
  export default _comparator;
}

declare module '@tinkoff/utils/function/complement' {
  import { complement } from 'ramda';
  const _complement: typeof complement;
  export default _complement;
}

declare module '@tinkoff/utils/function/compose' {
  import { compose } from 'ramda';
  const _compose: typeof compose;
  export default _compose;
}

declare module '@tinkoff/utils/function/cond' {
  import { cond } from 'ramda';
  const _cond: typeof cond;
  export default _cond;
}

declare module '@tinkoff/utils/function/curry' {
  import { curry } from 'ramda';
  const _curry: typeof curry;
  export default _curry;
}

declare module '@tinkoff/utils/function/curryN' {
  import { curryN } from 'ramda';
  const _curryN: typeof curryN;
  export default _curryN;
}

declare module '@tinkoff/utils/function/debounce' {
  interface debounce {
    <TFunc>(wait: number, fn: TFunc): Function & { cancel: Function };
    (wait: number): <TFunc>(fn: TFunc) => Function & { cancel: Function };
  }
  export default debounce;
}

declare module '@tinkoff/utils/function/either' {
  import { either } from 'ramda';
  const _either: typeof either;
  export default _either;
}

declare module '@tinkoff/utils/function/flip' {
  import { flip } from 'ramda';
  const _flip: typeof flip;
  export default _flip;
}

declare module '@tinkoff/utils/function/identity' {
  export default function <T>(x: T): T;

}

declare module '@tinkoff/utils/function/ifElse' {
  import { ifElse } from 'ramda';
  const _ifElse: typeof ifElse;
  export default _ifElse;
}

declare module '@tinkoff/utils/function/noop' {
  export default function (...args): {};

}

declare module '@tinkoff/utils/function/nothing' {
  export default function (...args): undefined;
}

declare module '@tinkoff/utils/function/once' {
  import { once } from 'ramda';
  const _once: typeof once;
  export default _once;
}

declare module '@tinkoff/utils/function/optional' {
  export default function <TFunc extends (...args) => any>(fn: TFunc)
    : <TParam>(x: TParam) => TParam extends undefined ? true : ReturnType<TFunc>;
}

declare module '@tinkoff/utils/function/tap' {
  import { tap } from 'ramda';
  const _tap: typeof tap;
  export default _tap;
}

declare module '@tinkoff/utils/function/throttle' {
  interface throttle {
    <TFunc extends (...args) => any>(wait: number, fn: TFunc): void;
    (wait: number): <TFunc extends (...args) => any>(fn: TFunc) => void;
  }
  export default throttle;
}

declare module '@tinkoff/utils/function/throttleEnd' {
  interface throttleEnd {
    <TFunc extends (...args) => any>(wait: number, fn: TFunc): void;
    (wait: number): <TFunc extends (...args) => any>(fn: TFunc) => void;
  }
  export default throttleEnd;
}

declare module '@tinkoff/utils/function/tryCatch' {
  import { tryCatch } from 'ramda';
  const _tryCatch: typeof tryCatch;
  export default _tryCatch;
}

declare module '@tinkoff/utils/function/when' {
  import { when } from 'ramda';
  const _when: typeof when;
  export default _when;
}
