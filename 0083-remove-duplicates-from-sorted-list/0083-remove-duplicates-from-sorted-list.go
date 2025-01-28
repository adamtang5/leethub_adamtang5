/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *   Val int
 *   Next *ListNode
 * }
 */
func deleteDuplicates(head *ListNode) *ListNode {
  if head == nil {
    return head
  }
  curr, currVal := head, head.Val
  for curr != nil {
    for curr.Next != nil && curr.Next.Val == currVal {
      curr.Next = curr.Next.Next
    }
    curr = curr.Next
    if curr != nil {
      currVal = curr.Val
    }
  }
  return head
}