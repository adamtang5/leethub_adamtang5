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
/**
 Do not return anything, modify root in-place instead.
 */
function recoverTree(root: TreeNode | null): void {
  const nodes: TreeNode[] = []
  
  function dfs(node: TreeNode | null): void {
    if (!node) return
    dfs(node.left)
    nodes.push(node)
    dfs(node.right)
  }
  dfs(root)
  const vals: number[] = nodes.map(node => node.val)
  vals.sort((a, b) => a - b)
  nodes.forEach((node, i) => node.val = vals[i])
}