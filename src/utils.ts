type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

type Expect<T extends true> = T;

type Interpolable = string | number | bigint | boolean | null | undefined;

type MergeInsertions<T> = T extends object
  ? { [K in keyof T]: MergeInsertions<T[K]> }
  : T;

type Alike<X, Y> = (<T>() => T extends MergeInsertions<X> ? 1 : 2) extends <
  T
>() => T extends MergeInsertions<Y> ? 1 : 2
  ? true
  : false;

type ExpectExtends<VALUE, EXPECTED> = EXPECTED extends VALUE ? true : false;
