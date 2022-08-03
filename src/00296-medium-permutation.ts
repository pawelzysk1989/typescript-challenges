export type Permutation<T, U = T> = T extends U
  ? [T, Permutation<Exclude<U, T>>]
  : [];

type perm = Permutation<"A" | "B" | "C">; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

export type Permutation2<T, U = T> = [T] extends [never]
  ? []
  : T extends never
  ? []
  : [T, Permutation2<Exclude<U, T>>];

type perm2 = Permutation2<"A" | "B" | "C">; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
