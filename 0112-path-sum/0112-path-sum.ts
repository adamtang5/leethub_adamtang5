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
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  type auxNode = [number, TreeNode]
  const queue: auxNode[] = root ? [[root.val, root]] : []
  while (queue.length) {
    const [sum, node] = queue.shift()
    if (!node.left && !node.right && sum === targetSum) return true
    if (node.left) queue.push([sum + node.left.val, node.left])
    if (node.right) queue.push([sum + node.right.val, node.right])
  }
  return false
}