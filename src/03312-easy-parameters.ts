export type MyParameters<Fn> = Fn extends (...args: [...infer X]) => any
  ? X
  : never;

const foo = (arg1: string, arg2: number): void => {};

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
