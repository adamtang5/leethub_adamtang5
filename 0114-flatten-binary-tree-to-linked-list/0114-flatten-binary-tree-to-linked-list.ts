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
/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  const stack: TreeNode[] = root ? [root] : []
  const ans: TreeNode = new TreeNode()
  let curr: TreeNode | null
  let resCurr: TreeNode | null = ans
  while (stack.length) {
    curr = stack.pop()
    resCurr.left = null
    resCurr.right = curr
    resCurr = resCurr.right
    if (curr.right) stack.push(curr.right)
    if (curr.left) stack.push(curr.left)
  }
}