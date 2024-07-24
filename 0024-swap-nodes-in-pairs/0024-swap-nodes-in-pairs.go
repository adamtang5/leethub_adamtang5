/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *   Val int
 *   Next *ListNode
 * }
 */
func swapPairs(head *ListNode) *ListNode {
  if head == nil {
    return head
  }
  dh := &ListNode{}
  dh.Next = head
  prev := dh
  next := prev.Next
  curr := next.Next
  
  for next.Next != nil {
    prev.Next = curr
    next.Next = curr.Next
    curr.Next = next
    if next.Next == nil {
      break
    }
    prev = next
    next = next.Next
    curr = next.Next
  }
  return dh.Next
}