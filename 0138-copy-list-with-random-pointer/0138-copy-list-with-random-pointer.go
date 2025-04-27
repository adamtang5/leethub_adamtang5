/**
 * Definition for a Node.
 * type Node struct {
 *   Val int
 *   Next *Node
 *   Random *Node
 * }
 */

func copyRandomList(head *Node) *Node {
  if head == nil {
    return head
  }
  orig, curr := []*Node{}, head
  for curr != nil {
    orig = append(orig, curr)
    curr = (*curr).Next
  }
  randoms := make([]int, len(orig))
  for i := 0; i < len(orig); i++ {
    randoms[i] = slices.Index(orig, (*orig[i]).Random)
  }

  ans := &Node{
    Val: (*head).Val,
  }
  ansArr := []*Node{}
  curr = ans
  for i := 1; i < len(orig); i++ {
    ansArr = append(ansArr, curr)
    (*curr).Next = &Node{
      Val: (*orig[i]).Val,
    }
    curr = (*curr).Next
  }
  ansArr = append(ansArr, curr)

  for i := 0; i < len(randoms); i++ {
    if randoms[i] >= 0 {
      (*ansArr[i]).Random = ansArr[randoms[i]]
    }
  }
  return ans
}