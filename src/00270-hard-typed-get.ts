type Get<T, K extends PropertyKey> = K extends keyof T
  ? T[K]
  : K extends `${infer Prop}.${infer DeepProps}`
  ? Prop extends keyof T
    ? Get<T[Prop], DeepProps>
    : never
  : never;



type GetCases = [
  Expect<Equal<Get<GetTestData, "hello">, "world">>,
  Expect<Equal<Get<GetTestData, "foo.bar.count">, 6>>,
  Expect<Equal<Get<GetTestData, "foo.bar">, { value: "foobar"; count: 6 }>>,
  Expect<Equal<Get<GetTestData, "foo.baz">, false>>,
  Expect<Equal<Get<GetTestData, "no.existed">, never>>
];

type GetTestData = {
  foo: {
    bar: {
      value: "foobar";
      count: 6;
    };
    included: true;
  };
  "foo.baz": false;
  hello: "world";
};
