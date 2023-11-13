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

function maxPathSum(root: TreeNode | null): number {
  let ans: number = root.val
  
  function dfs(node: TreeNode | null): number {
    if (!node) return 0
    const leftMax: number = Math.max(dfs(node.left), 0)
    const rightMax: number = Math.max(dfs(node.right), 0)
    
    ans = Math.max(ans, node.val + leftMax + rightMax)
    return node.val + Math.max(leftMax, rightMax)
  }
  
  dfs(root)
  return ans
}