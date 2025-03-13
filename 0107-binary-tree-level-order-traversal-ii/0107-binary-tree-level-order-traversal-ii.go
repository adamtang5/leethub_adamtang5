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

func levelOrderBottom(root *TreeNode) [][]int {
  queue := []*AuxNode{}
  if root != nil {
    queue = append(queue, &AuxNode{
      Level: 0,
      Node: root,
    })
  }
  fw := [][]int{}
  for len(queue) > 0 {
    curr := queue[0]
    queue = queue[1:]
    level, node := (*curr).Level, (*curr).Node
    if level > len(fw) - 1 {
      fw = append(fw, []int{})
    }
    fw[level] = append(fw[level], (*node).Val)
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
  rv := [][]int{}
  for i := len(fw) - 1; i >= 0; i-- {
    rv = append(rv, fw[i])
  }
  return rv
}