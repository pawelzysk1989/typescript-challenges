/* 
type WithoutItem<Items extends any[], Item> = Items extends [
  infer Head,
  ...infer Tail
]
  ? Head extends Item
    ? WithoutItem<Tail, Item>
    : [Head, ...WithoutItem<Tail, Item>]
  : [];

type Without<T extends any[], U> = U extends [infer Head, ...infer Tail]
  ? WithoutItem<Without<T, Tail>, Head>
  : U extends []
  ? T
  : WithoutItem<T, U>; 
  */

type ToUnion<T> = T extends any[] ? T[number] : T;
type Without<T extends any[], Items> = T extends [infer Head, ...infer Tail]
  ? Head extends ToUnion<Items>
    ? Without<Tail, Items>
    : [Head, ...Without<Tail, Items>]
  : [];

type Res = Without<[1, 2], 1>; // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []
