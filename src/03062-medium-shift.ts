export type Shift<T extends any[]> = T extends [any, ...infer Rest] ? Rest : [];

type Result = Shift<[3, 2, 1]>; // [2, 1]
