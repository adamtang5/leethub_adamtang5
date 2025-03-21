/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *   Val int
 *   Left *TreeNode
 *   Right *TreeNode
 * }
 */
func pathSum(root *TreeNode, targetSum int) [][]int {
  ans := [][]int{}
  dfs(root, 0, &[]int{}, targetSum, &ans)
  return ans
}

func dfs(node *TreeNode, runningSum int, runningVals *[]int, targetSum int, ans *[][]int)  {
  if node == nil {
    return
  }
  next := []int{}
  for _, val := range *runningVals {
    next = append(next, val)
  }
  next = append(next, (*node).Val)
  if (*node).Left == nil && (*node).Right == nil && runningSum + (*node).Val == targetSum {
    *ans = append(*ans, next)
  }
  dfs((*node).Left, runningSum + (*node).Val, &next, targetSum, ans)
  dfs((*node).Right, runningSum + (*node).Val, &next, targetSum, ans)
}