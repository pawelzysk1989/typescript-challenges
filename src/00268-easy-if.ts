export type If<Bool extends boolean, A, B> = Bool extends true ? A : B;

type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'
