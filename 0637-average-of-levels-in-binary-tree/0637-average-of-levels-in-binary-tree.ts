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
function averageOfLevels(root: TreeNode | null): number[] {
  type AuxNode = [number, TreeNode]
  const queue: AuxNode[] = root ? [[0, root]] : []
  const scores: number[][] = []
  while (queue.length) {
    const [level, node] = queue.shift()
    if (level > scores.length - 1) scores.push([])
    scores[level].push(node.val)
    if (node.left) queue.push([level + 1, node.left])
    if (node.right) queue.push([level + 1, node.right])
  }
  return scores.map(level => level.reduce((sum, score) => sum + score, 0) / level.length)
}