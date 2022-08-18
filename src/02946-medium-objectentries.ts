export type ObjectEntries<T, K extends keyof T = keyof T> = K extends any
  ? [K, T[K] extends undefined ? undefined : Exclude<T[K], undefined>]
  : never;

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}
type modelEntries = ObjectEntries<Model>; // ['name', string] | ['age', number] | ['locations', string[] | null];
