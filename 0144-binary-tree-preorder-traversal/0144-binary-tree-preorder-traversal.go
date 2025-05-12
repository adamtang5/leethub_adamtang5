/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *   Val int
 *   Left *TreeNode
 *   Right *TreeNode
 * }
 */
func preorderTraversal(root *TreeNode) []int {
  ans := []int{}
  dfs(root, &ans)
  return ans
}

func dfs(node *TreeNode, ans *[]int)  {
  if node == nil {
    return
  }
  *ans = append(*ans, (*node).Val)
  dfs((*node).Left, ans)
  dfs((*node).Right, ans)
}