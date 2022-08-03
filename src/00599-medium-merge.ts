export type Merge<F, S> = {
  [Prop in keyof F | keyof S]: Prop extends keyof S
    ? S[Prop]
    : Prop extends keyof F
    ? F[Prop]
    : never;
};

type foo = {
  name: string;
  age: string;
};
type coo = {
  age: number;
  sex: string;
};

type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}
