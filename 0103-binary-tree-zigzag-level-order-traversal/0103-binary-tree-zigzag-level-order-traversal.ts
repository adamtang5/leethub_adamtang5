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
function zigzagLevelOrder(root: TreeNode | null): number[][] {
  type AuxNode = [number, TreeNode]
  const queue: AuxNode[] = root ? [[0, root]] : []
  const ans: number[][] = []
  while (queue.length) {
    const [level, node] = queue.shift()
    if (level > ans.length - 1) ans.push([])
    if (level % 2) {
      ans[level].unshift(node.val)
    } else {
      ans[level].push(node.val)
    }
    if (node.left) queue.push([level + 1, node.left])
    if (node.right) queue.push([level + 1, node.right])
  }
  return ans
}