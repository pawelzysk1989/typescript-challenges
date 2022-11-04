type IsStartingWithLetter<T extends string> =
  Uncapitalize<T> extends Capitalize<T> ? false : true;

type CapitalizeWords<
  Str extends string,
  WasPrevLetter extends boolean = false,
  Acc extends string = ""
> = Str extends `${infer First}${infer Rest}`
  ? IsStartingWithLetter<First> extends true
    ? WasPrevLetter extends true
      ? CapitalizeWords<Rest, true, `${Acc}${First}`>
      : CapitalizeWords<Rest, true, `${Acc}${Capitalize<First>}`>
    : CapitalizeWords<Rest, false, `${Acc}${Capitalize<First>}`>
  : Acc;

type CapitalizeWordsCases = [
  Expect<Equal<CapitalizeWords<"foobar">, "Foobar">>,
  Expect<Equal<CapitalizeWords<"FOOBAR">, "FOOBAR">>,
  Expect<Equal<CapitalizeWords<"foo bar">, "Foo Bar">>,
  Expect<Equal<CapitalizeWords<"foo bar hello world">, "Foo Bar Hello World">>,
  Expect<Equal<CapitalizeWords<"foo bar.hello,world">, "Foo Bar.Hello,World">>,
  Expect<
    Equal<
      CapitalizeWords<"aa!bb@cc#dd$ee%ff^gg&hh*ii(jj)kk_ll+mm{nn}oo|pp🤣qq">,
      "Aa!Bb@Cc#Dd$Ee%Ff^Gg&Hh*Ii(Jj)Kk_Ll+Mm{Nn}Oo|Pp🤣Qq"
    >
  >,
  Expect<Equal<CapitalizeWords<"">, "">>
];
