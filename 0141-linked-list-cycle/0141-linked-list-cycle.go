/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *   Val int
 *   Next *ListNode
 * }
 */
func hasCycle(head *ListNode) bool {
  visited, curr := make(map[*ListNode]bool), head
  for curr != nil {
    if _, ok := visited[curr]; ok {
      return true
    }
    visited[curr] = true
    curr = (*curr).Next
  }
  return false
}