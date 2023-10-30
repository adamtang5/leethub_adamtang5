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

function postorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = []
  function dfs(node: TreeNode | null): void {
    if (!node) return
    dfs(node.left)
    dfs(node.right)
    ans.push(node.val)
  }
  dfs(root)
  return ans
}