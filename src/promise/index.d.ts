interface tap {
  <T>(fn: (a: T) => any, value: T): Promise<T>;
  <T>(fn: (a: T) => any): (value: T) => Promise<T>;
}

declare module '@tinkoff/utils/promise/promiseTap' {
  export default tap;
}

declare module '@tinkoff/utils/promise/tap' {
  export default tap;
}

interface resolveWith {
  <TResult>(func: (...args) => TResult, ...payload): Promise<TResult>
  <TResult>(func: (...args) => TResult): (...payload) => Promise<TResult>
}

declare module '@tinkoff/utils/promise/rejectWith' {
  export default resolveWith;
}

declare module '@tinkoff/utils/promise/resolveWith' {

  export default resolveWith;
}

