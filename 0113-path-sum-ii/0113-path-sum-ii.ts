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
    const next: number[] = [...runningVals, node.val]
    if (!node.left && !node.right && runningSum + node.val === targetSum) {
      ans.push(next)
    }
    dfs(node.left, runningSum + node.val, next)
    dfs(node.right, runningSum + node.val, next)
  }
  dfs(root, 0, [])
  return ans
};