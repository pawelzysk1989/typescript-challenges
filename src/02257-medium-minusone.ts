export type MinusOne<N extends number, Acc extends readonly any[] = []> = [
  ...Acc,
  any
]["length"] extends N
  ? Acc["length"]
  : MinusOne<N, [...Acc, any]>;

type Zero = MinusOne<1>; // 0
type FiftyFour = MinusOne<55>; // 54
