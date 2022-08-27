export type FlattenDepth<
  T,
  N extends number = 1,
  A extends null[] = []
> = T extends []
  ? []
  : T extends [infer Any, ...infer Rest]
  ? A["length"] extends N
    ? T
    : [...FlattenDepth<Any, N, [...A, null]>, ...FlattenDepth<Rest, N, A>]
  : [T];

type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>; // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
