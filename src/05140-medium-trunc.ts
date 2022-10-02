export type Trunc<T extends string | number> = `${T}` extends `${infer Abs}.${any}`
  ? Abs
  : `${T}`;
