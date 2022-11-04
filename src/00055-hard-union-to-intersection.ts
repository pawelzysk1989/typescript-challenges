type UnionToIntersection<U> = (
  U extends any ? (arg: U) => any : never
) extends (arg: infer Arg) => any
  ? Arg
  : never;

type Elo = UnionToIntersection<(() => "foo") | ((i: 42) => true)>;

type UnionToIntersectionCases = [
  Expect<Equal<UnionToIntersection<"foo" | 42 | true>, "foo" & 42 & true>>,
  Expect<
    Equal<
      UnionToIntersection<(() => "foo") | ((i: 42) => true)>,
      (() => "foo") & ((i: 42) => true)
    >
  >
];
