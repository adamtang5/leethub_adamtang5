/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *   Val int
 *   Left *TreeNode
 *   Right *TreeNode
 * }
 */
func postorderTraversal(root *TreeNode) []int {
  ans, stack := []int{}, []*TreeNode{}
  if root != nil {
    stack = append(stack, root)
  }
  var popped *TreeNode
  for len(stack) > 0 {
    popped = stack[len(stack) - 1]
    stack = stack[:len(stack) - 1]
    ans = append([]int{(*popped).Val}, ans...)
    if (*popped).Left != nil {
      stack = append(stack, (*popped).Left)
    }
    if (*popped).Right != nil {
      stack = append(stack, (*popped).Right)
    }
  }
  return ans
}