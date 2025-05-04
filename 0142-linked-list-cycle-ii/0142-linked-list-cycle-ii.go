/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *   Val int
 *   Next *ListNode
 * }
 */
func detectCycle(head *ListNode) *ListNode {
  if head == nil {
    return head
  }
  slow, fast := head, head
  for fast != nil && (*fast).Next != nil {
    slow, fast = (*slow).Next, (*(*fast).Next).Next
    if slow == fast {
      break
    }
  }
  if fast == nil || (*fast).Next == nil {
    return nil
  }
  fast = head
  for slow != nil {
    if slow == fast {
      return slow
    }
    slow, fast = (*slow).Next, (*fast).Next
  }
  return nil
}