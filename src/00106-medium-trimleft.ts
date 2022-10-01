type Empty = " " | "\n" | "\t";

export type TrimLeft<T extends string> = T extends `${Empty}${infer Y}`
  ? TrimLeft<Y>
  : T;

type trimed = TrimLeft<"  Hello World  ">; // expected to be 'Hello World  '
