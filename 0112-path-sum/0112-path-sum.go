/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *   Val int
 *   Left *TreeNode
 *   Right *TreeNode
 * }
 */
func hasPathSum(root *TreeNode, targetSum int) bool {
  return dfs(root, 0, targetSum)
}

func dfs(node *TreeNode, runningSum int, targetSum int) bool {
  if node == nil {
    return false
  }
  if (*node).Left == nil && (*node).Right == nil {
    return runningSum + (*node).Val == targetSum
  }
  return (*node).Left != nil && dfs((*node).Left, runningSum + (*node).Val, targetSum) || (*node).Right != nil && dfs((*node).Right, runningSum + (*node).Val, targetSum)
}