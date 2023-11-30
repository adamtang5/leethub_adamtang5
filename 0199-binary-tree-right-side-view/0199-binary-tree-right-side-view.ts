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

function rightSideView(root: TreeNode | null): number[] {
  const levels: TreeNode[][] = root ? [[root]] : [[]]
  while (levels.at(-1).length) {
    levels.push([])
    const next: TreeNode[] = levels.at(-1)
    levels.at(-2).forEach(node => {
      if (node.left) next.push(node.left)
      if (node.right) next.push(node.right)
    })
  }
  if (!levels.at(-1).length) levels.pop()
  return levels.map(level => level.at(-1).val)
}