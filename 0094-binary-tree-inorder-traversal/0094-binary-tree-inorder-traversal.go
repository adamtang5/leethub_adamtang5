/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *   Val int
 *   Left *TreeNode
 *   Right *TreeNode
 * }
 */
func inorderTraversal(root *TreeNode) []int {
  ans := []int{}
  if root == nil {
    return ans
  }
  left, right := inorderTraversal(root.Left), inorderTraversal(root.Right)
  for i := 0; i < len(left); i++ {
    ans = append(ans, left[i])
  }
  ans = append(ans, root.Val)
  for i := 0; i < len(right); i++ {
    ans = append(ans, right[i])
  }
  return ans
}