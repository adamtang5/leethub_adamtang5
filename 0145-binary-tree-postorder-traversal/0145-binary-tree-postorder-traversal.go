/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *   Val int
 *   Left *TreeNode
 *   Right *TreeNode
 * }
 */
func postorderTraversal(root *TreeNode) []int {
  ans := []int{}
  dfs(root, &ans)
  return ans
}

func dfs(node *TreeNode, ans *[]int)  {
  if node == nil {
    return
  }
  dfs((*node).Left, ans)
  dfs((*node).Right, ans)
  *ans = append(*ans, (*node).Val)
}