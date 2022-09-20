type Chunk<
  Arr extends any[],
  Len extends number,
  Acc extends any[] = []
> = Arr extends [infer Head, ...infer Tail]
  ? Acc["length"] extends Len
    ? [Acc, ...Chunk<Tail, Len, [Head]>]
    : Chunk<Tail, Len, [...Acc, Head]>
  : Acc extends []
  ? []
  : [Acc];

type exp1 = Chunk<[1, 2, 3], 2>; // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4>; // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1>; // expected to be [[1], [2], [3]]
