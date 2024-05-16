/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *   Val int
 *   Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
  prev, curr1, curr2, carry := ListNode{ Val: 0, Next: nil, }, l1, l2, 0
  curr := &prev
  for curr1 != nil || curr2 != nil {
    val1, val2 := 0, 0
    if curr1 != nil {
      val1 = curr1.Val
    }
    if curr2 != nil {
      val2 = curr2.Val
    }
    next := ListNode{
      Val: val1 + val2 + carry,
      Next: nil,
    }
    curr.Next = &next
    if curr1 != nil {
      curr1 = curr1.Next
    }
    if curr2 != nil {
      curr2 = curr2.Next
    }
    curr = curr.Next
    carry = curr.Val / 10
    curr.Val %= 10
  }
  if carry > 0 {
    next := ListNode{
      Val: carry,
      Next: nil,
    }
    curr.Next = &next
  }
  return prev.Next
}