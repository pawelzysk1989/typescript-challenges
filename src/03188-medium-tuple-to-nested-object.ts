export type TupleToNestedObject<
  T extends PropertyKey[],
  K
> = T extends [infer Head extends PropertyKey, ...infer Rest extends PropertyKey[]] ? 
{ [Key in Head] : TupleToNestedObject<Rest, K> } 
: K;

type a = TupleToNestedObject<["a"], string>; // {a: string}
type b = TupleToNestedObject<["a", "b"], number>; // {a: {b: number}}
type c = TupleToNestedObject<[], boolean>; // boolean. if the tuple is empty, just return the U type
