/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *   Val int
 *   Next *ListNode
 * }
 */
func merge2Lists(list1 *ListNode, list2 *ListNode) *ListNode {
  dh, curr1, curr2 := ListNode{}, list1, list2
  currDH := &dh
  for curr1 != nil && curr2 != nil {
    if curr1.Val <= curr2.Val {
      currDH.Next = curr1
      curr1 = curr1.Next
    } else {
      currDH.Next = curr2
      curr2 = curr2.Next
    }
    currDH = currDH.Next
  }
  if curr1 != nil {
    currDH.Next = curr1
  } else {
    currDH.Next = curr2
  }
  return dh.Next
}

func mergeKLists(lists []*ListNode) *ListNode {
  if len(lists) == 0 {
    return nil
  }
  var first *ListNode
  var second *ListNode
  for len(lists) > 1 {
    first, second, lists = lists[0], lists[1], lists[2:]
    lists = append(lists, merge2Lists(first, second))
  }
  return lists[0]
}