import { StringToUnion } from "./00531-medium-string-to-union";

export type AllCombinations<
  T extends string,
  Acc extends string = "",
  U = StringToUnion<T>,
  S = U
> = [U] extends [never]
  ? Acc
  : S extends string
  ? Acc | AllCombinations<T, `${Acc}${S}`, Exclude<U, S>>
  : never;

type AllCombinations_ABC = AllCombinations<"ABC">;
// should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'
