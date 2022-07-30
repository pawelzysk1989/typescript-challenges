const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

export type PromiseAllReturnType<T extends readonly any[]> =
  T extends readonly [infer Head, ...infer Tail]
    ? Head extends Promise<infer R>
      ? [R, ...PromiseAllReturnType<Tail>]
      : [Head, ...PromiseAllReturnType<Tail>]
    : [];

declare function PromiseAll<T extends readonly any[]>(
  promises: T
): Promise<PromiseAllReturnType<T>>;

declare function PromiseAll2<T extends readonly any[]>(
  promises: T
): Promise<{
  [Key in keyof T]: T[Key] extends Promise<infer R> ? R : T[Key];
}>;

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const);
const p2 = PromiseAll2([promise1, promise2, promise3] as const);
