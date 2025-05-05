/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *   Val int
 *   Next *ListNode
 * }
 */
func reorderList(head *ListNode)  {
  slow, fast := head, (*head).Next
  for fast != nil && (*fast).Next != nil {
    slow, fast = (*slow).Next, (*(*fast).Next).Next
  }
  second := (*slow).Next
  (*slow).Next = nil
  var prev, next *ListNode
  for second != nil {
    next = (*second).Next
    (*second).Next = prev
    prev = second
    second = next
  }
  first := head
  second = prev
  var next1, next2 *ListNode
  for second != nil {
    next1, next2 = (*first).Next, (*second).Next
    (*first).Next, (*second).Next = second, next1
    first = next1
    second = next2
  }
}