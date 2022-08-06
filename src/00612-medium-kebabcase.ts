export type KebabCase<
  S extends string,
  Acc extends string = ""
> = S extends `${infer Current}${infer Rest}`
  ? Current extends Lowercase<Current>
    ? KebabCase<Rest, `${Acc}${Current}`>
    : KebabCase<Rest, `${Acc}${Acc extends "" ? "" : "-"}${Lowercase<Current>}`>
  : Acc;
