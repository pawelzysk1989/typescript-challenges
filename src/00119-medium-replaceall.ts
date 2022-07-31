export type ReplaceAll<
  Text extends string,
  From extends string,
  To extends string
> = Text extends `${infer Before}${From}${infer After}`
  ? `${Before}${To}${ReplaceAll<After, From, To>}`
  : Text;

type replaced = ReplaceAll<"t y p e s", " ", "">; // expected to be 'types'
