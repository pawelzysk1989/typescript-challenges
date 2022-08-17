export type PickByType<O, K> = {
  [Prop in keyof O as O[Prop] extends K ? Prop : never]: O[Prop];
};

type OnlyBoolean = PickByType<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  boolean
>; // { isReadonly: boolean; isEnable: boolean; }
