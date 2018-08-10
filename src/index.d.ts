declare module '@tinkoff/utils/src/clone' {
  import { clone } from 'ramda';
  const _clone: typeof clone;
  export default _clone;
}

declare module '@tinkoff/utils/src/defaultTo' {
  import { defaultTo } from 'ramda';
  const _defaultTo: typeof defaultTo;
  export default _defaultTo;
}

declare module '@tinkoff/utils/src/isTrue' {
  export default function isTrue<T>(arg: T): T extends true ? true : T extends 'true' ? true : false;
}

declare module '@tinkoff/utils/src/negate' {
  import { negate } from 'ramda';
  const _negate: typeof negate;
  export default _negate;
}

declare module '@tinkoff/utils/src/not' {
  import { not } from 'ramda';
  const _not: typeof not;
  export default _not;
}

declare module '@tinkoff/utils/src/type' {
  import { type } from 'ramda';
  const _type: typeof type;
  export default _type;
}

declare module '@tinkoff/utils/src/uniqueId' {
  export default function (): number;
}

