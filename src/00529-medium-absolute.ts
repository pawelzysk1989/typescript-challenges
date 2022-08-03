export type Absolute<T extends number | string | bigint> =
  `${T}` extends `-${infer Abs}` ? Abs : `${T}`;

type Test = -100;
type Result = Absolute<Test>; // expected to be "100"
