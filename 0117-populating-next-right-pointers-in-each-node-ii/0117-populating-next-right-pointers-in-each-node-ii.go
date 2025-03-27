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
	thisCurr, nextLevel := root, nextChild(root)
  var thisNext *Node
  for thisCurr != nil && nextLevel != nil {
    if (*thisCurr).Left != nil && (*thisCurr).Right != nil {
      (*(*thisCurr).Left).Next = (*thisCurr).Right
    }
    if lastChild(thisCurr) != nil && thisNext != nil {
      for thisNext != nil && isLeaf(thisNext) {
        thisNext = (*thisNext).Next
      }
      (*lastChild(thisCurr)).Next = nextChild(thisNext)
    }
    thisCurr = thisNext
    if thisNext != nil {
      thisNext = (*thisNext).Next
    }
    if thisCurr == nil {
      thisCurr = nextLevel
      thisNext = thisCurr
      for thisNext != nil && isLeaf(thisNext) {
        thisNext = (*thisNext).Next
      }
      if thisNext == nil || isLeaf(thisNext) {
        nextLevel = nil
      } else {
        nextLevel = nextChild(thisNext)
      }
      thisNext = (*thisCurr).Next
    }
  }
  return root
}

func isLeaf(node *Node) bool {
  return (*node).Left == nil && (*node).Right == nil
}

func nextChild(node *Node) *Node {
  if node == nil {
    return nil
  } else if (*node).Left != nil {
    return (*node).Left
  } else {
    return (*node).Right
  }
}

func lastChild(node *Node) *Node {
  if node == nil {
    return nil
  } else if (*node).Right != nil {
    return (*node).Right
  } else {
    return (*node).Left
  }
}