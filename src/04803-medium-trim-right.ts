type Empty = " " | "\n" | "\t";

export type TrimRight<S extends string> =
  S extends `${infer TrimmedRight}${Empty}` ? TrimRight<TrimmedRight> : S;

type Trimed = TrimRight<"   Hello World    ">; // expected to be '   Hello World'
