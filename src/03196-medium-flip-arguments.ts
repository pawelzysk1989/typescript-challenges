import { Reverse } from "./03192-medium-reverse";

type Func = (...args: [...any]) => any;

export type FlipArguments<Fn extends Func> = Fn extends (
  ...args: [...infer Args]
) => infer Result
  ? (...args: Reverse<Args>) => Result
  : never;

type Flipped = FlipArguments<
  (arg0: string, arg1: number, arg2: boolean) => void
>;
// (arg0: boolean, arg1: number, arg2: string) => void
