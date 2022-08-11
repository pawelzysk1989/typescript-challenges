export type DropChar<
  S extends string,
  C extends string
> = S extends `${infer Lead}${infer Rest}`
  ? Lead extends C
    ? DropChar<Rest, C>
    : `${Lead}${DropChar<Rest, C>}`
  : "";
