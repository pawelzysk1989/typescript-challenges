export type LastIndexOf<
  T extends any[],
  U,
  Res extends number = -1,
  Examined extends any[] = []
> = T extends [infer Head, ...infer Tail]
  ? Equal<Head, U> extends true
    ? LastIndexOf<Tail, U, Examined["length"], [...Examined, Head]>
    : LastIndexOf<Tail, U, Res, [...Examined, Head]>
  : Res;

type cases = [
  Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
  Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
  Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<LastIndexOf<[string, 2, number, "a", number, 1], number>, 4>>,
  Expect<Equal<LastIndexOf<[string, any, 1, number, "a", any, 1], any>, 5>>
];
