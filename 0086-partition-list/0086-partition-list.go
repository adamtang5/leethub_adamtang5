/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *   Val int
 *   Next *ListNode
 * }
 */
func partition(head *ListNode, x int) *ListNode {
  if head == nil {
    return head
  }
  left, right, curr := &ListNode{}, &ListNode{}, head
  leftTail, rightTail := left, right
  var nextNode *ListNode
  for curr != nil {
    if curr.Val < x {
      leftTail.Next = curr
      leftTail = leftTail.Next
    } else {
      rightTail.Next = curr
      rightTail = rightTail.Next
    }
    nextNode = curr.Next
    curr.Next = nil
    curr = nextNode
  }
  leftTail.Next = right.Next
  return left.Next
}