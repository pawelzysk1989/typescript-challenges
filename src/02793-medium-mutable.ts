export type Mutable<T extends object> = {
  -readonly [Prop in keyof T]: T[Prop];
};

interface Todo {
  readonly title: string;
  readonly description: string;
  readonly completed: boolean;
}

type MutableTodo = Mutable<Todo>; // { title: string; description: string; completed: boolean; }
