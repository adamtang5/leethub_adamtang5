/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *   Val int
 *   Next *ListNode
 * }
 */
func sortList(head *ListNode) *ListNode {
  if head == nil || (*head).Next == nil {
    return head
  }
  slow, fast := head, head
  for fast != nil && (*fast).Next != nil && (*(*fast).Next).Next != nil {
    slow, fast = (*slow).Next, (*(*fast).Next).Next
  }
  left, right := head, (*slow).Next
  (*slow).Next = nil
  left = sortList(left)
  right = sortList(right)

  return merge(left, right)
}

func merge(head1 *ListNode, head2 *ListNode) *ListNode {
  prev, curr1, curr2 := &ListNode{}, head1, head2
  curr := prev
  for curr1 != nil && curr2 != nil {
    if (*curr1).Val <= (*curr2).Val {
      (*curr).Next = curr1
      curr1 = (*curr1).Next
    } else {
      (*curr).Next = curr2
      curr2 = (*curr2).Next
    }
    curr = (*curr).Next
  }
  if curr1 != nil {
    (*curr).Next = curr1
  } else {
    (*curr).Next = curr2
  }
  return (*prev).Next
}