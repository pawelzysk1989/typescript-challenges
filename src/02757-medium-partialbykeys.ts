type Flatten<T> = {
  [Prop in keyof T]: T[Prop];
};

// export type PartialByKeys<T, K extends keyof T = keyof T> = Flatten<
//   Partial<Pick<T, K>> & Omit<T, K>
// >;

export type PartialByKeys<T, K = keyof T> = Flatten<
  {
    [Prop in keyof T as Prop extends K ? never : Prop]: T[Prop];
  } & {
    [Prop in keyof T as Prop extends K ? Prop : never]?: T[Prop];
  }
>;

interface User {
  name: string;
  age: number;
  address: string;
}

type UserPartialName = PartialByKeys<User, "name">; // { name?:string; age:number; address:string }
