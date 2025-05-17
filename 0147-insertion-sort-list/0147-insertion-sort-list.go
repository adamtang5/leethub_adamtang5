/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *   Val int
 *   Next *ListNode
 * }
 */
func insertionSortList(head *ListNode) *ListNode {
  dh, orig := &ListNode{}, head
  currPrev, currNext := dh, (*dh).Next
  for orig != nil {
    for currNext != nil && (*currNext).Val <= (*orig).Val {
      currNext, currPrev = (*currNext).Next, (*currPrev).Next
    }
    (*currPrev).Next = orig
    orig = (*orig).Next
    (*(*currPrev).Next).Next = currNext
    currPrev = dh
    currNext = (*dh).Next
  }
  return (*dh).Next
}