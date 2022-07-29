export type MyPick<Type, Keys extends keyof Type> = {
  [Key in Keys]: Type[Key];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed" | "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  description: "",
};
