type GetRequired<T, R extends T = Required<T>> = {
  [Key in keyof T as Equal<T[Key], R[Key]> extends true ? Key : never]: T[Key];
};

type casesGetRequired = [
  Expect<Equal<GetRequired<{ foo: number; bar?: string }>, { foo: number }>>,
  Expect<
    Equal<GetRequired<{ foo: undefined; bar?: undefined }>, { foo: undefined }>
  >
];
