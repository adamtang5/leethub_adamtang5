/**
 * Definition for a binary tree node.
 * class TreeNode {
 *   val: number
 *   left: TreeNode | null
 *   right: TreeNode | null
 *   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 *   }
 * }
 */
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  const inIdx = {}
  inorder.forEach((el, i) => inIdx[el] = i)
  
  function helper(postLb: number, postUb: number): TreeNode | null {
    if (postLb === postUb) return null
    const rootInIdx: number = inIdx[postorder[postUb - 1]]
    if (postUb - postLb === 1) return new TreeNode(inorder[rootInIdx])
    let [l, r] = [postLb, postUb - 2]
    if (inIdx[postorder[r]] < rootInIdx) {
      return new TreeNode(inorder[rootInIdx], helper(postLb, postUb - 1), null)
    } else if (inIdx[postorder[l]] > rootInIdx) {
      return new TreeNode(inorder[rootInIdx], null, helper(postLb, postUb - 1))
    }
    
    let mid: number
    while (l <= r) {
      mid = Math.floor((l + r) / 2)
      if (inIdx[postorder[mid]] < rootInIdx && inIdx[postorder[mid + 1]] > rootInIdx) {
        break
      } else if (inIdx[postorder[mid]] < rootInIdx) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
    return new TreeNode(inorder[rootInIdx], helper(postLb, mid + 1), helper(mid + 1, postUb - 1))
  }
  
  return helper(0, postorder.length)
}