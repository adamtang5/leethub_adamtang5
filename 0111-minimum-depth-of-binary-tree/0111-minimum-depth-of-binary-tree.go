/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *   Val int
 *   Left *TreeNode
 *   Right *TreeNode
 * }
 */
func minDepth(root *TreeNode) int {
  if root == nil {
    return 0
  }
  ans, levels := 1, [][]*TreeNode{[]*TreeNode{}}
  levels = append(levels, []*TreeNode{root})
  for true {
    for _, node := range levels[ans] {
      if (*node).Left == nil && (*node).Right == nil {
        return ans
      }
      if ans + 1 >= len(levels) {
        levels = append(levels, []*TreeNode{})
      }
      if (*node).Left != nil {
        levels[ans + 1] = append(levels[ans + 1], (*node).Left)
      }
      if (*node).Right != nil {
        levels[ans + 1] = append(levels[ans + 1], (*node).Right)
      }
    }
    ans++
  }
  return ans
}