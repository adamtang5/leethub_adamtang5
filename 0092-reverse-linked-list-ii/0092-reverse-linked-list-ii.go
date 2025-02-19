/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *   Val int
 *   Next *ListNode
 * }
 */
func reverseBetween(head *ListNode, left int, right int) *ListNode {
  if left == right {
    return head
  }
  i, curr := 1, head
  var rev *ListNode
  var prev *ListNode
  var remain *ListNode
  if left == 1 {
    prev = &ListNode{}
    prev.Next = head
  }
  for i <= left - 1 {
    if i == left - 1 {
      prev = curr
    }
    curr = curr.Next
    i++
  }
  for i <= right {
    remain = curr.Next
    curr.Next = rev
    rev = curr
    curr = remain
    i++
  }
  prev.Next.Next = remain
  prev.Next = rev
  if left == 1 {
    return rev
  } else {
    return head
  }
}