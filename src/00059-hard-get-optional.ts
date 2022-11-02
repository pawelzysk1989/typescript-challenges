type GetOptional<T, R extends T = Required<T>> = {
  [Key in keyof T as Equal<T[Key], R[Key]> extends true ? never : Key]: T[Key];
};

type casesGetOptional = [
  Expect<Equal<GetOptional<{ foo: number; bar?: string }>, { bar?: string }>>,
  Expect<
    Equal<GetOptional<{ foo: undefined; bar?: undefined }>, { bar?: undefined }>
  >
];
