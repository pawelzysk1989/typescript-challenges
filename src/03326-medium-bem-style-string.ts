// type Elements<E extends string[], Element extends string = E[number]> = [
//   Element
// ] extends [never]
//   ? ""
//   : `__${Element}`;
// type Modifiers<M extends string[], Modifier extends string = M[number]> = [
//   Modifier
// ] extends [never]
//   ? ""
//   : `--${Modifier}`;

// export type BEM<
//   B extends string,
//   E extends string[],
//   M extends string[],
//   Element = Elements<E>,
//   Modifier = Modifiers<M>
// > = Modifier extends string
//   ? Element extends string
//     ? `${B}${Element}${Modifier}`
//     : never
//   : never;

type WithPrefix<
  Prefix extends string,
  Words extends string[]
> = Words extends [] ? "" : `${Prefix}${Words[number]}`;

export type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${WithPrefix<"__", E>}${WithPrefix<"--", M>}`;

type bem = BEM<"btn", ["price"], ["warning", "success"]>; // 'btn__price--warning' | 'btn__price--success'
