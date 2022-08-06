type UnionDiff<A, B> = Exclude<A | B, A & B>;

type Diff<O, O1> = {
  [Key in UnionDiff<keyof O, keyof O1>]: (O & O1)[Key];
};
