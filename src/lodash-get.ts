type LodashGet<
  T,
  K extends PropertyKey,
  ResForOrigin = Get<T, K>,
  ResForRequired = Get<DeepRequired<T>, K>
> = Equal<ResForRequired, never> extends true
  ? never
  : Equal<ResForOrigin, never> extends true
  ? ResForRequired | undefined
  : ResForOrigin;

type EloTest = LodashGet<LodashGetTestData, "prop">;

type LodashGetCases = [
  Expect<Equal<LodashGet<LodashGetTestData, "hello">, "world">>,
  Expect<Equal<LodashGet<LodashGetTestData, "foo.bar.count">, 6>>,
  Expect<
    Equal<
      LodashGet<LodashGetTestData, "foo.bar">,
      { value: "foobar"; count: 6 }
    >
  >,
  Expect<Equal<LodashGet<LodashGetTestData, "foo.baz">, false>>,
  Expect<
    Equal<
      LodashGet<LodashGetTestData, "foo.optional">,
      | {
          value: [4, 3, 2, 1];
        }
      | undefined
    >
  >,
  Expect<
    Equal<
      LodashGet<LodashGetTestData, "foo.optional.value">,
      [4, 3, 2, 1] | undefined
    >
  >,
  Expect<
    Equal<LodashGet<LodashGetTestData, "foo.optional.value.1">, 3 | undefined>
  >,
  Expect<Equal<LodashGet<LodashGetTestData, "no.existed">, never>>
];

type LodashGetTestData = {
  foo: {
    bar: {
      value: "foobar";
      count: 6;
    };
    included: true;
    optional?: {
      value: [4, 3, 2, 1];
    };
  };
  "foo.baz": false;
  hello: "world";
};
