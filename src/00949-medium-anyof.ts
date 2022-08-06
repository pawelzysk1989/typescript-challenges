type Empties = 0 | "" | false | [] | Record<PropertyKey, never>;

type AnyOf<T extends readonly any[]> = T extends [infer Head, ...infer Rest]
  ? Head extends Empties
    ? AnyOf<Rest>
    : true
  : false;
