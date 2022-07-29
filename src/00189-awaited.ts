type ExampleType = Promise<string>

export type MyAwaited<T> = T extends Promise<infer R> ? R : never

type Result = MyAwaited<ExampleType> // string