/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *   Val int
 *   Left *TreeNode
 *   Right *TreeNode
 * }
 */
func maxDepth(root *TreeNode) int {
  if root == nil {
    return 0
  }
  depth, levels := 0, [][]*TreeNode{[]*TreeNode{root}}
  for len(levels[depth]) > 0 {
    if len(levels) < depth + 2 {
      levels = append(levels, []*TreeNode{})
    }
    for _, node := range levels[depth] {
      if (*node).Left != nil {
        levels[depth + 1] = append(levels[depth + 1], (*node).Left)
      }
      if (*node).Right != nil {
        levels[depth + 1] = append(levels[depth + 1], (*node).Right)
      }
    }
    depth++
  }
  return depth
}