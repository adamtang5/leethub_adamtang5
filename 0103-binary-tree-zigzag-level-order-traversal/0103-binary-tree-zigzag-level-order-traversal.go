/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *   Val int
 *   Left *TreeNode
 *   Right *TreeNode
 * }
 */
type AuxNode struct {
  Level int
  Node *TreeNode
}

func zigzagLevelOrder(root *TreeNode) [][]int {
  queue := []*AuxNode{}
  if root != nil {
    queue = append(queue, &AuxNode{
      Level: 0,
      Node: root,
    })
  }
  ans := [][]int{}
  for len(queue) > 0 {
    curr := queue[0]
    queue = queue[1:]
    level, node := (*curr).Level, (*curr).Node
    if level > len(ans) - 1 {
      ans = append(ans, []int{})
    }
    if level % 2 == 0 {
      ans[level] = append(ans[level], (*node).Val)
    } else {
      ans[level] = append([]int{(*node).Val}, ans[level]...)
    }
    if (*node).Left != nil {
      queue = append(queue, &AuxNode{
        Level: level + 1,
        Node: (*node).Left,
      })
    }
    if (*node).Right != nil {
      queue = append(queue, &AuxNode{
        Level: level + 1,
        Node: (*node).Right,
      })
    }
  }
  return ans
}