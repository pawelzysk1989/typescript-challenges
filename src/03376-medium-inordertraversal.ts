interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export type InorderTraversal<T extends TreeNode | null> = [T] extends [TreeNode]
  ? [...InorderTraversal<T["left"]>, T["val"], ...InorderTraversal<T["right"]>]
  : [];

const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const;

const tree2 = {
  val: 1,
  left: null,
  right: null,
} as const;

const tree3 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: null,
} as const;

const tree4 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: null,
    right: null,
  },
} as const;

type Tree = InorderTraversal<null>;
type Tree1 = InorderTraversal<typeof tree1>;
type Tree2 = InorderTraversal<typeof tree2>;
type Tree3 = InorderTraversal<typeof tree3>;
type Tree4 = InorderTraversal<typeof tree4>;
