/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *   Val int
 *   Left *TreeNode
 *   Right *TreeNode
 * }
 */
func buildTree(preorder []int, inorder []int) *TreeNode {
  inIdx := make(map[int]int)
  for i := 0; i < len(inorder); i++ {
    inIdx[inorder[i]] = i
  }

  return helper(0, len(preorder), &preorder, &inorder, &inIdx)
}

func helper(preLb int, preUb int, preorder *[]int, inorder *[]int, inIdx *map[int]int) *TreeNode {
  if preLb == preUb {
    return nil
  }
  var val int
  var left, right *TreeNode
  if rootInIdx, ok := (*inIdx)[(*preorder)[preLb]]; ok {
    if preUb - preLb == 1 {
      return &TreeNode{
        Val: (*inorder)[rootInIdx],
      }
    }
    l, r := preLb + 1, preUb - 1
    if val, ok := (*inIdx)[(*preorder)[l]]; ok && val > rootInIdx {
      return &TreeNode{
        Val: (*preorder)[preLb],
        Right: helper(preLb + 1, preUb, preorder, inorder, inIdx),
      }
    } else if val, ok := (*inIdx)[(*preorder)[r]]; ok && val < rootInIdx {
      return &TreeNode{
        Val: (*preorder)[preLb],
        Left: helper(preLb + 1, preUb, preorder, inorder, inIdx),
      }
    }
    mid := (l + r) / 2
    for l <= r {
      mid = (l + r) / 2
      val1, ok1 := (*inIdx)[(*preorder)[mid]]
      val2, ok2 := (*inIdx)[(*preorder)[mid + 1]]
      if ok1 && ok2 {
        if val1 < rootInIdx && val2 > rootInIdx {
          break
        } else if val1 < rootInIdx {
          l = mid + 1
        } else {
          r = mid - 1
        }
      }
    }
    val = (*preorder)[preLb]
    left = helper(preLb + 1, mid + 1, preorder, inorder, inIdx)
    right = helper(mid + 1, preUb, preorder, inorder, inIdx)
  }
  return &TreeNode{
    Val: val,
    Left: left,
    Right: right,
  }
}