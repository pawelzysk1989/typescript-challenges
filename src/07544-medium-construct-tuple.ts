type ConstructTuple<
  L extends number = 0,
  Tuple extends readonly any[] = []
> = Tuple["length"] extends L ? Tuple : ConstructTuple<L, [unknown, ...Tuple]>;

type ConstructTupleCases = [
  Expect<Equal<ConstructTuple<0>, []>>,
  Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
  Expect<Equal<ConstructTuple<999>["length"], 999>>,
  // @ts-expect-error
  Expect<Equal<ConstructTuple<1000>["length"], 1000>>
];
