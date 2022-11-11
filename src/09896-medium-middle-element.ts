type GetMiddleElement<T extends any[]> = T extends [infer Only]
  ? [Only]
  : T extends [infer First, infer Last]
  ? [First, Last]
  : T extends [any, ...infer Rest, any]
  ? GetMiddleElement<Rest>
  : [];

type GetMiddleElementCases = [
  Expect<Equal<GetMiddleElement<[]>, []>>,
  Expect<Equal<GetMiddleElement<[1, 2, 3, 4, 5]>, [3]>>,
  Expect<Equal<GetMiddleElement<[1, 2, 3, 4, 5, 6]>, [3, 4]>>,
  Expect<Equal<GetMiddleElement<[() => string]>, [() => string]>>,
  Expect<
    Equal<GetMiddleElement<[() => number, "3", [3, 4], 5]>, ["3", [3, 4]]>
  >,
  Expect<
    Equal<
      GetMiddleElement<[() => string, () => number]>,
      [() => string, () => number]
    >
  >,
  Expect<Equal<GetMiddleElement<[never]>, [never]>>
];
