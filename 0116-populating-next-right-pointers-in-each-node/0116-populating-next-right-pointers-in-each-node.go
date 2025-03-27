/**
 * Definition for a Node.
 * type Node struct {
 *   Val int
 *   Left *Node
 *   Right *Node
 *   Next *Node
 * }
 */

func connect(root *Node) *Node {
	curr := root
  var next *Node
  if root != nil {
    next = (*root).Left
  } else {
    next = nil
  }
  for curr != nil && next != nil {
    (*(*curr).Left).Next = (*curr).Right
    if (*curr).Next != nil {
      (*(*curr).Right).Next = (*(*curr).Next).Left
    }
    curr = (*curr).Next
    if curr == nil {
      curr = next
      next = (*curr).Left
    }
  }
  return root
}