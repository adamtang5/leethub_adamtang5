/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *   Val int
 *   Next *ListNode
 * }
 */
func reverseKGroup(head *ListNode, k int) *ListNode {
  curr, prev, rev, l, i, remain, newPrev, j := head, head, head, 0, 0, head, head, 0
  for curr != nil {
    curr = curr.Next
    l++
  }
  curr = head
  for l-i >= k {
    j = 0
    rev = nil
    for j < k {
      remain = curr.Next
      curr.Next = rev
      rev = curr
      curr = remain
      j++
    }
    if i == 0 {
      prev.Next = remain
      head = rev
    } else {
      prev.Next.Next = remain
      newPrev = prev.Next
      prev.Next = rev
      prev = newPrev
    }
    i += k
  }
  return head
}