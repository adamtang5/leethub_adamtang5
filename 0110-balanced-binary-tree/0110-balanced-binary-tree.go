/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *   Val int
 *   Left *TreeNode
 *   Right *TreeNode
 * }
 */
type AuxNode struct {
  IsBal bool
  Height int
}

func isBalanced(root *TreeNode) bool {
  return (*dfs(root)).IsBal
}

func dfs(node *TreeNode) *AuxNode {
  if node == nil {
    return &AuxNode{
      IsBal: true,
      Height: 0,
    }
  }
  left, right := dfs((*node).Left), dfs((*node).Right)
  lBal, lHt, rBal, rHt := (*left).IsBal, (*left).Height, (*right).IsBal, (*right).Height
  abs := 0
  if lHt >= rHt {
    abs = lHt - rHt
  } else {
    abs = rHt - lHt
  }
  return &AuxNode{
    IsBal: lBal && rBal && abs <= 1,
    Height: max(lHt, rHt) + 1,
  }
}