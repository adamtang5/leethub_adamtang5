/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *   Val int
 *   Next *ListNode
 * }
 */
func removeNthFromEnd(head *ListNode, n int) *ListNode {
  ahead, behind := head, head
  for n >= 0 {
    if ahead != nil {
      ahead = ahead.Next
      n--
    } else {
      return head.Next
    }
  }
  for ahead != nil {
    ahead = ahead.Next
    behind = behind.Next
  }
  behind.Next = behind.Next.Next
  return head
}