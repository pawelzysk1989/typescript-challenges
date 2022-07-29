export type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type MyOmit2<T, K extends keyof T> = {
  [Prop in Exclude<keyof T, K>]: T[Prop];
};

export type MyOmit3<T, K extends keyof T> = {
  [Property in keyof T as Property extends K ? never : Property]: T[Property];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
