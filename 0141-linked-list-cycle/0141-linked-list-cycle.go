/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *   Val int
 *   Next *ListNode
 * }
 */
func hasCycle(head *ListNode) bool {
  curr := head
  for n := 0; n <= 10000; n++ {
    if curr == nil {
      return false
    }
    curr = (*curr).Next
  }
  return true
}