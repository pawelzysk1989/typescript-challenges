export type Join<T, U extends Interpolable> = T extends [infer Head]
  ? Head
  : T extends [infer Head extends Interpolable, ...infer Tail]
  ? `${Head}${U}${Join<Tail, U>}`
  : "";

type cases = [
  Expect<Equal<Join<["a", "p", "p", "l", "e"], "-">, "a-p-p-l-e">>,
  Expect<Equal<Join<["Hello", "World"], " ">, "Hello World">>,
  Expect<Equal<Join<["2", "2", "2"], 1>, "21212">>,
  Expect<Equal<Join<["o"], "u">, "o">>
];
