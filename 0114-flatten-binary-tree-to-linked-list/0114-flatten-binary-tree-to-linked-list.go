/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *   Val int
 *   Left *TreeNode
 *   Right *TreeNode
 * }
 */
func flatten(root *TreeNode)  {
  stack, ans := []*TreeNode{}, TreeNode{}
  if root != nil {
    stack = append(stack, root)
  }
  resCurr := &ans
  for len(stack) > 0 {
    curr := stack[len(stack) - 1]
    stack = stack[:len(stack) - 1]
    (*resCurr).Left, (*resCurr).Right = nil, curr
    resCurr = (*resCurr).Right
    if (*curr).Right != nil {
      stack = append(stack, (*curr).Right)
    }
    if (*curr).Left != nil {
      stack = append(stack, (*curr).Left)
    }
  }
}