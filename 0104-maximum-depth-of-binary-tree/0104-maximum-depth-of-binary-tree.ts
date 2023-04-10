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
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0
  let depth = 0
  const levels = {}
  levels[depth] = [root]
  while (levels[depth].length) {
    levels[depth + 1] = levels[depth + 1] || []
    levels[depth].forEach(node => {
      if (node.left) levels[depth + 1].push(node.left)
      if (node.right) levels[depth + 1].push(node.right)
    })
    depth++
  }
  return depth
}