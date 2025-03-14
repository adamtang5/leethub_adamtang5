/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *   Val int
 *   Left *TreeNode
 *   Right *TreeNode
 * }
 */
func sortedArrayToBST(nums []int) *TreeNode {
  return helper(0, len(nums), nums)
}

func helper(lb int, ub int, nums []int) *TreeNode {
  if lb == ub {
    return nil
  }
  mid := (lb + ub) / 2
  return &TreeNode{
    Val: nums[mid],
    Left: helper(lb, mid, nums),
    Right: helper(mid + 1, ub, nums),
  }
}