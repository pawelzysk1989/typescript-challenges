type Unary = (arg: any) => any;
type Curry<Fn> = Fn extends Unary
  ? Fn
  : Fn extends (arg: infer Arg, ...args: infer Rest) => infer Result
  ? (arg: Arg) => Curry<(...args: Rest) => Result>
  : never;

declare function Currying<Fn>(fn: Fn): Curry<Fn>;

const curried1 = Currying((a: string, b: number, c: boolean) => true);
const curried2 = Currying(
  (
    a: string,
    b: number,
    c: boolean,
    d: boolean,
    e: boolean,
    f: string,
    g: boolean
  ) => true
);
const curried3 = Currying(() => true);

type caseCurrying = [
  Expect<
    Equal<typeof curried1, (a: string) => (b: number) => (c: boolean) => true>
  >,
  Expect<
    Equal<
      typeof curried2,
      (
        a: string
      ) => (
        b: number
      ) => (
        c: boolean
      ) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
    >
  >,
  Expect<Equal<typeof curried3, () => true>>
];
