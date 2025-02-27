/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *   Val int
 *   Left *TreeNode
 *   Right *TreeNode
 * }
 */
type AuxNode struct {
  Lb float64
  Ub float64
  Node *TreeNode
}

func isValidBST(root *TreeNode) bool {
  queue := []*AuxNode{}
  initial := AuxNode{
    Lb: math.Inf(-1),
    Node: root,
    Ub: math.Inf(1),
  }
  queue = append(queue, &initial)

  for len(queue) > 0 {
    curr := queue[0]
    queue = queue[1:]
    lb, node, ub := curr.Lb, *curr.Node, curr.Ub
    val := float64(node.Val)
    if !validNode(lb, val, ub) {
      return false
    }
    if node.Left != nil {
      queue = append(queue, &AuxNode{
        Lb: lb,
        Node: node.Left,
        Ub: val,
      })
    }
    if node.Right != nil {
      queue = append(queue, &AuxNode{
        Lb: val,
        Node: node.Right,
        Ub: ub,
      })
    }
  }
  return true
}

func validNode(lb float64, val float64, ub float64) bool {
  return val > lb && val < ub
}