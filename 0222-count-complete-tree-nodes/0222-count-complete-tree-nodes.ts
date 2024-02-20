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

function countNodes(root: TreeNode | null): number {
  if (!root) return 0
  let left: TreeNode | null = root
  let right: TreeNode | null = root
  let lHt = 1
  let rHt = 1
  while (left.left) {
    left = left.left
    lHt++
  }
  while (right.right) {
    right = right.right
    rHt++
  }
  if (lHt === rHt) return 2 ** lHt - 1
  return 1 + countNodes(root.left) + countNodes(root.right)
}