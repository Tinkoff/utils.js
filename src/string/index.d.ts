declare module '@tinkoff/utils/string/capitalize' {
  export default function (str: string): string;
}

declare module '@tinkoff/utils/string/endsWith' {
  import { endsWith } from 'ramda';
  const _endsWith: typeof endsWith;
  export default _endsWith;
}

declare module '@tinkoff/utils/string/escape' {
  export default function (str: string): string;
}

declare module '@tinkoff/utils/string/escapeRegExp' {
  export default function (str: string): string;
}

declare module '@tinkoff/utils/string/repeat' {
  import { repeat } from 'ramda';
  const _repeat: typeof repeat;
  export default _repeat;
}

declare module '@tinkoff/utils/string/replace' {
  import { replace } from 'ramda';
  const _replace: typeof replace;
  export default _replace;
}

declare module '@tinkoff/utils/string/split' {
  import { split } from 'ramda';
  const _split: typeof split;
  export default _split;
}

declare module '@tinkoff/utils/string/startsWith' {
  import { startsWith } from 'ramda';
  const _startsWith: typeof startsWith;
  export default _startsWith;
}

declare module '@tinkoff/utils/string/template' {
  interface template {
    (replacements: object, str?: string): string;
    (replacements: object): (str?: string) => string;
  }
  export default template;
}

declare module '@tinkoff/utils/string/test' {
  import { test } from 'ramda';
  const _test: typeof test;
  export default _test;
}

declare module '@tinkoff/utils/string/toLower' {
  import { toLower } from 'ramda';
  const _toLower: typeof toLower;
  export default _toLower;
}

declare module '@tinkoff/utils/string/toString' {
  import { toString } from 'ramda';
  const _toString: typeof toString;
  export default _toString;
}

declare module '@tinkoff/utils/string/toUpper' {
  import { toUpper } from 'ramda';
  const _toUpper: typeof toUpper;
  export default _toUpper;
}

declare module '@tinkoff/utils/string/trim' {
  import { trim } from 'ramda';
  const _trim: typeof trim;
  export default _trim;
}

declare module '@tinkoff/utils/string/trimLeft' {
  export default function (str: string): string;
}

declare module '@tinkoff/utils/string/unescape' {
  export default function (str: string): string;
}

