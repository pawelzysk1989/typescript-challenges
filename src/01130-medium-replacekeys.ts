export type ReplaceKeys<U, T, Y> = U extends U
  ? {
      [Prop in keyof U]: Prop extends T
        ? Prop extends keyof Y
          ? Y[Prop]
          : never
        : U[Prop];
    }
  : U;
