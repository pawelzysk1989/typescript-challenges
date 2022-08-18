export type OmitByType<T, K> = {
  [Prop in keyof T as T[Prop] extends K ? never : Prop]: T[Prop];
};

type OmitBoolean = OmitByType<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  boolean
>; // { name: string; count: number }
