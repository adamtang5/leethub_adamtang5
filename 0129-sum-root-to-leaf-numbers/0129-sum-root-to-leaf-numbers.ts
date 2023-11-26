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

function sumNumbers(root: TreeNode | null): number {
  let ans = 0
  
  function dfs(node: TreeNode | null, curr: number): void {
    if (!node.left && !node.right) ans += curr + node.val
    if (node.left) dfs(node.left, 10 * (curr + node.val))
    if (node.right) dfs(node.right, 10 * (curr + node.val))
  }
  
  dfs(root, 0)
  return ans
}