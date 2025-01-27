/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteDuplicates(head *ListNode) *ListNode {
  if head == nil {
    return head
  }
  initVal, prev, curr := head.Val, &ListNode{}, head
  prev.Next = head
  for curr != nil {
    if curr.Next != nil && curr.Next.Val != curr.Val {
      prev, curr = prev.Next, curr.Next
    } else if curr.Next != nil && curr.Next.Val == curr.Val {
      for curr.Next != nil && curr.Next.Val == curr.Val {
        curr = curr.Next
      }
      prev.Next = curr.Next
      if curr.Val == initVal {
        head = prev.Next
        if head != nil {
          initVal = head.Val
        }
      }
      if curr.Next == nil {
        break
      } else {
        curr = prev.Next
      }
    } else {
      break
    }
  }
  return head
}