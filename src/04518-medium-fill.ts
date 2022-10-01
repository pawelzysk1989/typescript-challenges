type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T["length"],
  Acc extends any[] = [],
  NextAcc extends any[] = [...Acc, any],
  NextAccLen extends number = NextAcc["length"]
> = T extends [infer Head, ...infer Tail]
  ? Acc["length"] extends End
    ? [...Acc, ...T]
    : Acc["length"] extends Start
    ? Fill<Tail, N, NextAccLen, End, [...Acc, N]>
    : Fill<Tail, N, Start, End, [...Acc, Head]>
  : Acc;

type exp = Fill<[1, 2, 3], 0>; // expected to be [0, 0, 0]
