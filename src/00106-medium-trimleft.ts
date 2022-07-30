export type TrimLeft<T extends string> = T extends ` ${infer Y}`
  ? TrimLeft<Y>
  : T;

type trimed = TrimLeft<"  Hello World  ">; // expected to be 'Hello World  '
