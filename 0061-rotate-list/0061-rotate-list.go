/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *   Val int
 *   Next *ListNode
 * }
 */
func rotateRight(head *ListNode, k int) *ListNode {
  if head == nil {
    return head
  }
  curr, l, i := head, 0, 0
  for curr != nil {
    curr = curr.Next
    l++
  }
  headIdx := (l-(k%l))%l
  if headIdx == 0 {
    return head
  }
  curr = head
  for i < headIdx-1 {
    curr = curr.Next
    i++
  }
  last, newHead := curr, curr.Next
  last.Next, curr = nil, newHead
  for curr.Next != nil {
    curr = curr.Next
  }
  curr.Next = head
  return newHead
}