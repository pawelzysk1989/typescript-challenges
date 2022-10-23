type Subsequence<T extends any[]> = T extends [infer Head, ...infer Tail]
  ? [Head, ...Subsequence<Tail>] | Subsequence<Tail>
  : [];

type SubsequenceCases = [
  Expect<Equal<Subsequence<[1, 2]>, [] | [1] | [2] | [1, 2]>>,
  Expect<
    Equal<
      Subsequence<[1, 2, 3]>,
      [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3]
    >
  >
];
