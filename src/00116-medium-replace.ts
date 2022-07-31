export type Replace<
  Text extends string,
  From extends string,
  To extends string
> = Text extends `${infer Before}${From}${infer After}`
  ? `${Before}${To}${After}`
  : Text;

type replaced = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'
