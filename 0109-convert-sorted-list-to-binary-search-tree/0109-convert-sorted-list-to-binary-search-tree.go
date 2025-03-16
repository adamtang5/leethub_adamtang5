/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *   Val int
 *   Next *ListNode
 * }
 */
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *   Val int
 *   Left *TreeNode
 *   Right *TreeNode
 * }
 */
func sortedListToBST(head *ListNode) *TreeNode {
  lst, curr := []*ListNode{}, head
  for curr != nil {
    lst = append(lst, curr)
    curr = (*curr).Next
  }
  return helper(0, len(lst), &lst)
}

func helper(lb int, ub int, lst *[]*ListNode) *TreeNode {
  if lb == ub {
    return nil
  }
  mid := (lb + ub) / 2
  return &TreeNode{
    Val: (*(*lst)[mid]).Val,
    Left: helper(lb, mid, lst),
    Right: helper(mid + 1, ub, lst),
  }
}