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
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const ans: number[][] = []
  function dfs(node: TreeNode | null, runningSum: number, runningVals: number[]): void {
    if (!node) return
    if (!node.left && !node.right && runningSum + node.val === targetSum) {
      ans.push([...runningVals, node.val])
    }
    dfs(node.left, runningSum + node.val, [...runningVals, node.val])
    dfs(node.right, runningSum + node.val, [...runningVals, node.val])
  }
  dfs(root, 0, [])
  return ans
};