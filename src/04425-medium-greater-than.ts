export type GreaterThan<
  T extends number,
  U extends number,
  Acc extends null[] = []
> = Acc["length"] extends T
  ? false
  : Acc["length"] extends U
  ? true
  : GreaterThan<T, U, [...Acc, null]>;

type Test1 = GreaterThan<2, 1>; //should be true
type Test2 = GreaterThan<1, 1>; //should be false
type Test3 = GreaterThan<10, 100>; //should be false
type Test4 = GreaterThan<111, 11>; //should be true
