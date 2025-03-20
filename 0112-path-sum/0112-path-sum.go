/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *   Val int
 *   Left *TreeNode
 *   Right *TreeNode
 * }
 */
type AuxNode struct {
  Sum int
  Node *TreeNode
}

func hasPathSum(root *TreeNode, targetSum int) bool {
  queue := []*AuxNode{}
  if root != nil {
    queue = append(queue, &AuxNode{
      Sum: (*root).Val,
      Node: root,
    })
  }
  for len(queue) > 0 {
    curr := queue[0]
    queue = queue[1:]
    sum, node := (*curr).Sum, (*curr).Node
    if (*node).Left == nil && (*node).Right == nil && sum == targetSum {
      return true
    }
    if (*node).Left != nil {
      queue = append(queue, &AuxNode{
        Sum: sum + (*(*node).Left).Val,
        Node: (*node).Left,
      })
    }
    if (*node).Right != nil {
      queue = append(queue, &AuxNode{
        Sum: sum + (*(*node).Right).Val,
        Node: (*node).Right,
      })
    }
  }
  return false
}