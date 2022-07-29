type BuildTuple<
  Current extends [...T[]],
  T,
  Count extends number
> = Current["length"] extends Count
  ? Current
  : BuildTuple<[T, ...Current], T, Count>;
type Tuple<T, Count extends number> = BuildTuple<[], T, Count>;

type ThreeDates = Tuple<Date, 3>; // [Date, Date, Date]

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

type Head<R extends unknown[]> = R[0];
type Tail<R extends unknown[]> = R extends [any, ...infer T] ? T : [];
type Lead<R extends unknown[]> = R extends [...infer L, any] ? L : [];
type Last<R extends unknown[]> = [any, ...R][R["length"]];

type UnaryFunction<A = any, R = any> = (a: A) => R;

type Flow<Fns extends UnaryFunction[], ReducedFn extends UnaryFunction> =
    Fns["length"] extends 0
    ? ReducedFn
    : (
        Head<Fns> extends UnaryFunction<infer A extends ReturnType<ReducedFn>, infer R>
        ? Flow<Tail<Fns>, UnaryFunction<Parameters<ReducedFn>[0], R>>
        : never
    )

type Pipe<Fns extends UnaryFunction[]> = Flow<Tail<Fns>, Head<Fns>>

type Reverse<Tuple> = Tuple extends [infer Head, ...infer Rest]
       ? [...Reverse<Rest>, Head] : [];

type Combine<Fns extends UnaryFunction[]> = Flow<Reverse<Lead<Fns>>, Last<Fns>>

type CombineTest = Combine<[(x: string) => boolean, (x: string) => number, (x: Date) => string]>

function flow<Fns extends UnaryFunction[]>(...fns: Fns): Pipe<Fns> {
    return function<T>(initialValue: T) {
        return fns.reduce((acc, fn) => fn(acc), initialValue)
    }
}

function combine<Fns extends UnaryFunction[]>(...fns: Fns): Combine<Fns> {
    // @ts-ignore
    return function<T>(initialValue: T) {
        return fns.reduceRight((acc, fn) => fn(acc), initialValue)
    }
}

const double = (num: number) => num * 2;
const flowed = flow(double, double, String, (str: string) => str + '1234', Date.now)(5);
// const flowedWithError = flow(double, double, Number.parseFloat, (str: string) => str + '1234', Date.now)(5);

export type Pipeline<Functions extends UnaryFunction[]> =
  Functions["length"] extends 1
    ? Functions
    : Functions extends [
      UnaryFunction<infer FirstArg, infer FirstRes>, 
      UnaryFunction<infer SecondArg, infer SecondRes>, 
      ...infer Rest extends UnaryFunction[]]
    ? [
        UnaryFunction<FirstArg, FirstRes>,
        ...Pipeline<[FirstRes extends SecondArg ? UnaryFunction<SecondArg, SecondRes> : never, ...Rest]>
      ]
    : Functions;

function pipe<Functions extends UnaryFunction[]>(
  ...functions: Pipeline<Functions>
  ): (arg: Parameters<Functions[0]>[0]) => ReturnType<Last<Functions>> {
  return (initialValue) => {
    const length = functions.length

    let reduced = initialValue

    for (let index = 0; index < length; index += 1) {
      reduced = functions[index](reduced)
    }

    return reduced
  }
}
const piped = pipe(
  double,
  double,
  String,
  (str: string) => str + "1234",
  Date.now,
)(5);

// const pipedWithError = pipe(double, double, Number.parseFloat, (str: string) => str + '1234', Date.now)(5);

type Composition<Functions extends UnaryFunction[]> = Reverse<Pipeline<Reverse<Functions>>>
type CompositionTest = Composition<[(x: number) => boolean, (x: string) => number, (x: Date) => string]>


