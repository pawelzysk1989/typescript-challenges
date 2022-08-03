export type AppendToObject<
  Obj extends object,
  Prop extends PropertyKey,
  Value
> = {
  [Key in keyof Obj | Prop]: Key extends Prop
    ? Value
    : Key extends keyof Obj
    ? Obj[Key]
    : never;
};

type Test = { id: "1" };
type Result = AppendToObject<Test, "value", 4>; // expected to be { id: '1', value: 4 }
