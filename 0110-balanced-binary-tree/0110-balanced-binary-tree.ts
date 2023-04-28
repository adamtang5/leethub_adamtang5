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
function isBalanced(root: TreeNode | null): boolean {
  type auxNode = [boolean, number]
  function dfs(node: TreeNode | null): auxNode {
    if (!node) return [true, 0]
    const [left, right] = [dfs(node.left), dfs(node.right)]
    return [left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1, Math.max(left[1], right[1]) + 1]
  }
  
  return dfs(root)[0]
}