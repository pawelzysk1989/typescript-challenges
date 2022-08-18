export type StartsWith<
  T extends string,
  S extends string
> = T extends `${S}${any}` ? true : false;

type a = StartsWith<"abc", "ac">; // expected to be false
type b = StartsWith<"abc", "ab">; // expected to be true
type c = StartsWith<"abc", "abcd">; // expected to be false
