type Combination<
  T extends string[],
  Acc extends string = never,
  U = T[number],
  R = U
> = Equal<U, never> extends true
  ? Acc
  : U extends string
  ?
      | Acc
      | Combination<
          T,
          `${Equal<Acc, never> extends true ? "" : `${Acc} `}${U}`,
          Exclude<R, U>
        >
  : never;

type CombinationCases = [
  Expect<
    Equal<
      Combination<["foo", "bar", "baz"]>,
      | "foo"
      | "bar"
      | "baz"
      | "foo bar"
      | "foo bar baz"
      | "foo baz"
      | "foo baz bar"
      | "bar foo"
      | "bar foo baz"
      | "bar baz"
      | "bar baz foo"
      | "baz foo"
      | "baz foo bar"
      | "baz bar"
      | "baz bar foo"
    >
  >
];
