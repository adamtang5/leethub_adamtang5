/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *   Val int
 *   Left *TreeNode
 *   Right *TreeNode
 * }
 */
func buildTree(inorder []int, postorder []int) *TreeNode {
  inIdx := make(map[int]int)
  for i := 0; i < len(inorder); i++ {
    inIdx[inorder[i]] = i
  }

  return helper(0, len(postorder), &inorder, &postorder, &inIdx)
}

func helper(postLb int, postUb int, inorder *[]int, postorder *[]int, inIdx *map[int]int) *TreeNode {
  if postLb == postUb {
    return nil
  }
  var val int
  var left, right *TreeNode
  if rootInIdx, ok := (*inIdx)[(*postorder)[postUb - 1]]; ok {
    if postUb - postLb == 1 {
      return &TreeNode{
        Val: (*inorder)[rootInIdx],
      }
    }
    l, r := postLb, postUb - 2
    if val, ok := (*inIdx)[(*postorder)[r]]; ok && val < rootInIdx {
      return &TreeNode{
        Val: (*inorder)[rootInIdx],
        Left: helper(postLb, postUb - 1, inorder, postorder, inIdx),
      }
    } else if val, ok := (*inIdx)[(*postorder)[l]]; ok && val > rootInIdx {
      return &TreeNode{
        Val: (*inorder)[rootInIdx],
        Right: helper(postLb, postUb - 1, inorder, postorder, inIdx),
      }
    }
    mid := (l + r) / 2
    for l <= r {
      mid = (l + r) / 2
      val1, ok1 := (*inIdx)[(*postorder)[mid]]
      val2, ok2 := (*inIdx)[(*postorder)[mid + 1]]
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
    val = (*inorder)[rootInIdx]
    left = helper(postLb, mid + 1, inorder, postorder, inIdx)
    right = helper(mid + 1, postUb - 1, inorder, postorder, inIdx)
  }
  return &TreeNode{
    Val: val,
    Left: left,
    Right: right,
  }
}