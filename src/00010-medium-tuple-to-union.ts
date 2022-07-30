export type TupleToUnion<T extends any[]> = T[number];

type TupleToUnion2<T extends any[]> = T extends [infer Head, ...infer Rest]
  ? Head | TupleToUnion2<Rest>
  : never;

type Arr = ["1", "2", "3"];

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
type Test2 = TupleToUnion2<Arr>; // expected to be '1' | '2' | '3'
