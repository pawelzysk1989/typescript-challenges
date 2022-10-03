export type IndexOf<T extends any[], U, Acc extends any[] = []> = T extends [
  infer Head,
  ...infer Tail
]
  ? Equal<U, Head> extends true
    ? Acc["length"]
    : IndexOf<Tail, U, [...Acc, any]>
  : -1;

type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, "a"], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, "a", any], any>, 4>>
];
