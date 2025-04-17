/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *   Val int
 *   Left *TreeNode
 *   Right *TreeNode
 * }
 */
func sumNumbers(root *TreeNode) int {
  ans := 0
  dfs(root, 0, &ans)
  return ans
}

func dfs(node *TreeNode, curr int, ans *int)  {
  if (*node).Left == nil && (*node).Right == nil {
    *ans += curr + (*node).Val
  }
  if (*node).Left != nil {
    dfs((*node).Left, 10 * (curr + (*node).Val), ans)
  }
  if (*node).Right != nil {
    dfs((*node).Right, 10 * (curr + (*node).Val), ans)
  }
}