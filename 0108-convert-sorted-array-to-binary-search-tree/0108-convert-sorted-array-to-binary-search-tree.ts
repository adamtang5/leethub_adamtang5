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
function sortedArrayToBST(nums: number[]): TreeNode | null {
  function helper(lb: number, ub: number): TreeNode | null {
    if (lb === ub) return null
    const mid = Math.floor((lb + ub) / 2)
    return new TreeNode(nums[mid], helper(lb, mid), helper(mid + 1, ub))
  }
  
  return helper(0, nums.length)
}