/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *   Val int
 *   Next *ListNode
 * }
 */
func detectCycle(head *ListNode) *ListNode {
  nodeSet, curr := make(map[*ListNode]bool), head
  for curr != nil {
    if _, ok := nodeSet[curr]; ok {
      return curr
    }
    nodeSet[curr] = true
    curr = (*curr).Next
  }
  return nil
}