/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
  dh, c1, c2 := ListNode{}, list1, list2
  cdh := &dh
  
  for c1 != nil && c2 != nil {
    if c1.Val <= c2.Val {
      cdh.Next = c1
      c1 = c1.Next
    } else {
      cdh.Next = c2
      c2 = c2.Next
    }
    cdh = cdh.Next
  }
  if c1 != nil {
    cdh.Next = c1
  } else {
    cdh.Next = c2
  }
  return dh.Next
}