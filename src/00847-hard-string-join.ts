type Join<Joiner extends string, Parts extends string[]> = Parts extends [
  infer Part
]
  ? Part
  : Parts extends [
      infer Part extends string,
      ...infer RestParts extends string[]
    ]
  ? `${Part}${Joiner}${Join<Joiner, RestParts>}`
  : "";

declare function join<Joiner extends string>(
  delimiter: Joiner
): <Parts extends string[]>(...parts: Parts) => Join<Joiner, Parts>;

// Edge cases
const noCharsOutput = join("-")();
const oneCharOutput = join("-")("a");
const noDelimiterOutput = join("")("a", "b", "c");

// Regular cases
const hyphenOutput = join("-")("a", "b", "c");
const hashOutput = join("#")("a", "b", "c");
const twoCharOutput = join("-")("a", "b");
const longOutput = join("-")("a", "b", "c", "d", "e", "f", "g", "h");

type JoinCases = [
  Expect<Equal<typeof noCharsOutput, "">>,
  Expect<Equal<typeof oneCharOutput, "a">>,
  Expect<Equal<typeof noDelimiterOutput, "abc">>,
  Expect<Equal<typeof twoCharOutput, "a-b">>,
  Expect<Equal<typeof hyphenOutput, "a-b-c">>,
  Expect<Equal<typeof hashOutput, "a#b#c">>,
  Expect<Equal<typeof longOutput, "a-b-c-d-e-f-g-h">>
];
