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
    const [lBal, lHt] = dfs(node.left)
    const [rBal, rHt] = dfs(node.right)
    return [lBal && rBal && Math.abs(lHt - rHt) <= 1, Math.max(lHt, rHt) + 1]
  }
  
  return dfs(root)[0]
}