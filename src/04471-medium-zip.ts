export type Zip<
  T extends readonly any[],
  U extends readonly any[]
> = T extends [infer THead, ...infer TRest]
  ? U extends [infer UHead, ...infer URest]
    ? [[THead, UHead], ...Zip<TRest, URest>]
    : []
  : [];

type exp = Zip<[1, 2], [true, false]>; // expected to be [[1, true], [2, false]]
