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

function postorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = []
  const stack: TreeNode[] = root ? [root] : []
  let popped: TreeNode | null
  while (stack.length) {
    popped = stack.pop()
    ans.unshift(popped.val)
    if (popped.left) stack.push(popped.left)
    if (popped.right) stack.push(popped.right)
  }
  return ans
}