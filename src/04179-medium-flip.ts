export type Flip<T extends Record<string, string | number | boolean>> = {
  [P in keyof T as `${T[P]}`]: P;
};

type Test1 = Flip<{ a: "x"; b: "y"; c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
type Test2 = Flip<{ a: 1; b: 2; c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
type Test3 = Flip<{ a: false; b: true }>; // {false: 'a', true: 'b'}
type Test4 = Flip<{ 3.14: "pi"; true: "bool" }>; // { pi: 3.14; bool: true }
