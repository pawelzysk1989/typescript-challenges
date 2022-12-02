type Fn<T, R> = (arg: T) => R;

type Fns<T, Rs extends unknown[]> = Rs extends [infer R, ...infer Rss]
  ? [Fn<T, R>, ...Fns<T, Rss>]
  : [];

function lift<T, R, Rs extends unknown[]>(
  f: (...args: [...Rs]) => R,
  ...fns: Fns<T, Rs>
) {
  return (x: T): R => f(...(fns.map((fn: Fn<T, unknown>) => fn(x)) as Rs));
}
