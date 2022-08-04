export type KebabCase<
  S extends string,
  Prev extends string = ""
> = S extends `${infer First}${infer Rest}`
  ? First extends Lowercase<First>
    ? `${First}${KebabCase<Rest, First>}`
    : `${Prev extends "" ? "" : "-"}${Lowercase<First>}${KebabCase<
        Rest,
        First
      >}`
  : "";
