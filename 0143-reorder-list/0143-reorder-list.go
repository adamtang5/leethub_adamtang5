/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *   Val int
 *   Next *ListNode
 * }
 */
func reorderList(head *ListNode)  {
  stack, curr := []*ListNode{}, head
  for curr != nil {
    stack = append(stack, curr)
    curr = (*curr).Next
  }
  curr, stack = head, stack[1:]
  for len(stack) > 0 {
    (*curr).Next = stack[len(stack) - 1]
    stack = stack[:len(stack) - 1]
    curr = (*curr).Next
    if len(stack) > 0 {
      (*curr).Next = stack[0]
      stack = stack[1:]
      curr = (*curr).Next
    }
  }
  (*curr).Next = nil
}