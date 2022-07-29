type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

export type Head<T extends unknown[]> = T[0];

type head1 = Head<arr1>; // expected to be 'a'
type head2 = Head<arr2>; // expected to be 3
