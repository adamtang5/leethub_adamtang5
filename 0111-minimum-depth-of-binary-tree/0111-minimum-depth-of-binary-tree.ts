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
function minDepth(root: TreeNode | null): number {
  if (!root) return 0
  let ans = 1
  const levels = {}
  levels[ans] = [root]
  while (true) {
    for (let node of levels[ans]) {
      if (!node.left && !node.right) return ans
      levels[ans + 1] = levels[ans + 1] || []
      if (node.left) levels[ans + 1].push(node.left)
      if (node.right) levels[ans + 1].push(node.right)
    }
    ans++
  }
}