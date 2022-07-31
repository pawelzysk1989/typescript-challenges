export type AppendArgument<Fn, Arg> = Fn extends (
  ...args: infer Args
) => infer Res
  ? (...args: [...Args, Arg]) => Res
  : never;

type Fn = (a: number, b: string) => number;

type Result = AppendArgument<Fn, boolean>; // expected be (a: number, b: string, x: boolean) => number
