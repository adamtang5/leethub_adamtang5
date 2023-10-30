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

function preorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = []
  const stack: TreeNode[] = root ? [root] : []
  let popped: TreeNode | null
  while (stack.length) {
    popped = stack.pop()
    ans.push(popped.val)
    if (popped.right) stack.push(popped.right)
    if (popped.left) stack.push(popped.left)
  }
  return ans
}