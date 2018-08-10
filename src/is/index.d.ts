declare module '@tinkoff/utils/is/array' {
  export default function isArray(arg): arg is Array<any>;
}

declare module '@tinkoff/utils/is/arrayLike' {
  export default function isArrayLike(arg): arg is ArrayLike<any>;
}

declare module '@tinkoff/utils/is/boolean' {
  export default function isBoolean(arg): arg is Boolean;
}

declare module '@tinkoff/utils/is/contains' {
  import { contains } from 'ramda';
  const _contains: typeof contains;
  export default _contains;
}

declare module '@tinkoff/utils/is/element' {
  export default function (obj): boolean;
}

declare module '@tinkoff/utils/is/empty' {
  import { empty } from 'ramda';
  const _empty: typeof empty;
  export default _empty;
}

declare module '@tinkoff/utils/is/equal' {
  import { equals } from 'ramda';
  const _equal: typeof equals;
  export default _equal;
}

declare module '@tinkoff/utils/is/finite' {
  export default function (obj): boolean;
}

declare module '@tinkoff/utils/is/function' {
  export default function isFunction(arg): arg is Function;
}

declare module '@tinkoff/utils/is/nil' {
  export default function isNull(arg): arg is null;
}

declare module '@tinkoff/utils/is/not' {
  import { not } from 'ramda';
  const _not: typeof not;
  export default _not;
}

declare module '@tinkoff/utils/is/number' {
  export default function isNumber(arg): arg is Number;
}

declare module '@tinkoff/utils/is/object' {
  export default function isObject(arg): arg is Object;
}

declare module '@tinkoff/utils/is/plainObject' {
  export default function isPlainObject(arg): boolean;
}

declare module '@tinkoff/utils/is/promise' {
  export default function isPromise(arg): arg is Promise<any>;
}

declare module '@tinkoff/utils/is/reactElement' {
  export default function isPlainObject(arg): boolean;
}

declare module '@tinkoff/utils/is/string' {
  export default function isPromise(arg): arg is String;
}

declare module '@tinkoff/utils/is/undefined' {
  export default function isPromise(arg): arg is undefined;
}

