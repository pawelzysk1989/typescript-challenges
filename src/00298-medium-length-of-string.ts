// type StringToList<S extends string> = S extends `${infer First}${infer Rest}` ? [First, ...StringToList<Rest>] : [];
// type LengthOfString<S extends string> = StringToList<S>["length"]

type LengthOfString<
  S extends string,
  Acc extends string[] = []
> = S extends `${infer First}${infer Rest}`
  ? LengthOfString<Rest, [First, ...Acc]>
  : Acc["length"];
