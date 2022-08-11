export type PercentageParser<S extends string, Acc extends [string, string, string] = ['', '', '']> = S extends '' 
  ? Acc
  : S extends `${infer C extends number}${infer Rest}`
  ? PercentageParser<Rest, [Acc[0], `${Acc[1]}${C}`, Acc[2]]>
  : S extends `${infer C extends '+' | '-'}${infer Rest}`
  ? PercentageParser<Rest, [C, Acc[1], Acc[2]]>
  : S extends `${infer C extends '%'}${infer Rest}`
  ? PercentageParser<Rest, [Acc[0], Acc[1], C]>
  : never

  type elo = PercentageParser<'+1'>

type PString1 = ''
type PString2 = '+85%'
type PString3 = '-85%'
type PString4 = '85%'
type PString5 = '85'
type PString6 = '+1'

type R1 = PercentageParser<PString1> // expected ['', '', '']
type R2 = PercentageParser<PString2> // expected ["+", "85", "%"]
type R3 = PercentageParser<PString3> // expected ["-", "85", "%"]
type R4 = PercentageParser<PString4> // expected ["", "85", "%"]
type R5 = PercentageParser<PString5> // expected ["", "85", ""]
type R6 = PercentageParser<PString6> // expected ["+", "1", ""]