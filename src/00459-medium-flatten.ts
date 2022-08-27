export type Flatten<T> = T extends []
  ? []
  : T extends [infer Any, ...infer Rest]
  ? [...Flatten<Any>, ...Flatten<Rest>]
  : [T];

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]
