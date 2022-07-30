export type LookUp<T extends { type: string }, F> = Extract<T, { type: F }>;
export type LookUp2<T extends { type: string }, F> = T extends { type: F }
  ? T
  : never;

interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type MyDogType = LookUp<Cat | Dog, "dog">; // expected to be `Dog`
type MyCatType = LookUp<Cat | Dog, "cat">; // expected to be `Cat`
