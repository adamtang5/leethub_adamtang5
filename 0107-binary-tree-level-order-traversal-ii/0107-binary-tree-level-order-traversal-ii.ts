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
function levelOrderBottom(root: TreeNode | null): number[][] {
  type AuxNode = [number, TreeNode]
  const queue: AuxNode[] = root ? [[0, root]] : []
  const fw: number[][] = []
  while (queue.length) {
    const [level, node] = queue.shift()
    if (level > fw.length - 1) fw.push([])
    fw[level].push(node.val)
    if (node.left) queue.push([level + 1, node.left])
    if (node.right) queue.push([level + 1, node.right])
  }
  return fw.reverse()
}