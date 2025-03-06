/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *   Val int
 *   Left *TreeNode
 *   Right *TreeNode
 * }
 */
func isSameTree(p *TreeNode, q *TreeNode) bool {
  if p == nil && q == nil {
    return true
  }
  if (p == nil) != (q == nil) {
    return false
  }
  if (*p).Left == nil && (*p).Right == nil && (*q).Left == nil && (*q).Right == nil {
    return (*p).Val == (*q).Val
  }
  if (*p).Val != (*q).Val {
    return false
  } else {
    return isSameTree((*p).Left, (*q).Left) && isSameTree((*p).Right, (*q).Right)
  }
}