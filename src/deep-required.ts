type DeepRequired<T> = T extends object
  ? {
      [Prop in keyof T]-?: DeepRequired<T[Prop]>;
    }
  : T;