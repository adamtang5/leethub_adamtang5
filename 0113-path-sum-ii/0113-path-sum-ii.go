/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *   Val int
 *   Left *TreeNode
 *   Right *TreeNode
 * }
 */
func pathSum(root *TreeNode, targetSum int) [][]int {
  ans, runningSum, stack1, stack2 := [][]int{}, 0, []*TreeNode{}, []*TreeNode{}
  if root != nil {
    stack1 = append(stack1, root)
  }
  var curr *TreeNode
  for len(stack1) > 0 {
    curr = stack1[len(stack1) - 1]
    stack1 = stack1[:len(stack1) - 1]
    stack2, runningSum = append(stack2, curr), runningSum + (*curr).Val
    if (*curr).Right != nil {
      stack1 = append(stack1, (*curr).Right)
    }
    if (*curr).Left != nil {
      stack1 = append(stack1, (*curr).Left)
    }
    if (*stack2[len(stack2) - 1]).Left == nil && (*stack2[len(stack2) - 1]).Right == nil {
      if runningSum == targetSum {
        seq := []int{}
        for _, node := range stack2 {
          seq = append(seq, (*node).Val)
        }
        ans = append(ans, seq)
      }
      for len(stack1) > 0 && len(stack2) > 0 && stack1[len(stack1) - 1] != (*stack2[len(stack2) - 1]).Right {
        curr = stack2[len(stack2) - 1]
        stack2 = stack2[:len(stack2) - 1]
        runningSum -= (*curr).Val
      }
    }
  }
  return ans
}