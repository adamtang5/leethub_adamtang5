/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isValidBST(root: TreeNode | null): boolean {
  function validNode(lb: number, val: number, ub: number): boolean {
    return val > lb && val < ub
  }
  
  interface AuxNode {
    lb: number
    node: TreeNode
    ub: number
  }
  
  const queue: AuxNode[] = [{
    lb: -Infinity,
    node: root,
    ub: Infinity,
  }]
  while (queue.length) {
    const { lb, node, ub } = queue.shift()
    if (!validNode(lb, node.val, ub)) return false
    if (node.left) queue.push({
      lb,
      node: node.left,
      ub: node.val,
    })
    if (node.right) queue.push({
      lb: node.val,
      node: node.right,
      ub,
    })
  }
  return true
}