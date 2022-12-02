function curry<T extends unknown[], U extends unknown[], R>(
  f: (...args: [...T, ...U]) => R,
  ...a: T
) {
  return (...b: U) => f(...a, ...b);
}

const fn1 = (a: number, b: string, c: boolean, d: string[]) => 0;

const c0 = curry(fn1); // (a: number, b: string, c: boolean, d: string[]) => number
const c1 = curry(fn1, 1); // (b: string, c: boolean, d: string[]) => number
const c2 = curry(fn1, 1, "abc"); // (c: boolean, d: string[]) => number
const c3 = curry(fn1, 1, "abc", true); // (d: string[]) => number
const c4 = curry(fn1, 1, "abc", true, ["x", "y"]); // () => number
