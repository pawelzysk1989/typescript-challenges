type Fibonacci<
  T extends number,
  Iter extends any[] = [],
  Curr extends any[] = [],
  Next extends any[] = [1]
> = T extends Iter["length"]
  ? Curr["length"]
  : Fibonacci<T, [any, ...Iter], Next, [...Curr, ...Next]>;

type test = Fibonacci<8>;

type FibonacciCases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>
];
