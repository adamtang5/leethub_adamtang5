/**
 * Definition for a Node.
 * type Node struct {
 *   Val int
 *   Left *Node
 *   Right *Node
 *   Next *Node
 * }
 */
type AuxNode struct {
  Level int
  Node *Node
}

func connect(root *Node) *Node {
  queue := []*AuxNode{}
  if root != nil {
    queue = append(queue, &AuxNode{
      Level: 0,
      Node: root,
    })
  }
  levels := [][]*Node{}
  for len(queue) > 0 {
    curr := queue[0]
    queue = queue[1:]
    level, node := (*curr).Level, (*curr).Node
    if level > len(levels) - 1 {
      levels = append(levels, []*Node{})
    }
    levels[level] = append(levels[level], node)
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
  for len(levels) > 0 {
    currLevel := levels[0]
    var currNode *Node
    levels = levels[1:]
    var last *Node
    for len(currLevel) > 0 {
      last = currLevel[len(currLevel) - 1]
      currLevel = currLevel[:len(currLevel) - 1]
      (*last).Next = currNode
      currNode = last
    }
  }
  return root
}