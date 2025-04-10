/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *   Val int
 *   Left *TreeNode
 *   Right *TreeNode
 * }
 */
func maxPathSum(root *TreeNode) int {
  ans := []int{(*root).Val}
  dfs(root, &ans)
  return ans[0]
}

func dfs(node *TreeNode, ans *[]int) int {
  if node == nil {
    return 0
  }
  leftMax := max(dfs((*node).Left, ans), 0)
  rightMax := max(dfs((*node).Right, ans), 0)
  (*ans)[0] = max((*ans)[0], (*node).Val + leftMax + rightMax)
  return (*node).Val + max(leftMax, rightMax)
}