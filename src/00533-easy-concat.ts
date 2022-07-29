type Concat<A extends any[], B extends any[]> = [...A, ...B]

type Result = Concat<[1, 2], [3, 4, 5]> 