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
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const inIdx = {}
  inorder.forEach((el, i) => inIdx[el] = i)
  
  function helper(preLb: number, preUb: number): TreeNode | null {
    if (preLb === preUb) return null
    const rootInIdx: number = inIdx[preorder[preLb]]
    if (preUb - preLb === 1) return new TreeNode(inorder[rootInIdx])
    let [l, r] = [preLb + 1, preUb - 1]
    if (inIdx[preorder[l]] > rootInIdx) {
      return new TreeNode(preorder[preLb], null, helper(preLb + 1, preUb))
    } else if (inIdx[preorder[r]] < rootInIdx) {
      return new TreeNode(preorder[preLb], helper(preLb + 1, preUb), null)
    }
    let mid: number
    while (l <= r) {
      mid = Math.floor((l + r) / 2)
      if (inIdx[preorder[mid]] < rootInIdx && inIdx[preorder[mid + 1]] > rootInIdx) {
        break
      } else if (inIdx[preorder[mid]] < rootInIdx) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
    return new TreeNode(preorder[preLb], helper(preLb + 1, mid + 1), helper(mid + 1, preUb))
  }
  
  return helper(0, preorder.length)
}