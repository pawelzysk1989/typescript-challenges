type Empty = " " | "\n";

export type Trim<S extends string> = S extends `${Empty}${infer TrimmedLeft}`
  ? Trim<TrimmedLeft>
  : S extends `${infer TrimmedRight}${Empty}`
  ? Trim<TrimmedRight>
  : S;

type trimmed = Trim<` 

Hello World   `>; // expected to be 'Hello World'
