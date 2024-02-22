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

function binaryTreePaths(root: TreeNode | null): string[] {
  if (!root.left && !root.right) return [root.val.toString()]
  let ans: string[] = []
  if (root.left) {
    ans = [
      ...ans,
      ...binaryTreePaths(root.left).map(path => {
        return `${root.val.toString()}->${path}`
      })
    ]
  }
  if (root.right) {
    ans = [
      ...ans,
      ...binaryTreePaths(root.right).map(path => {
        return `${root.val.toString()}->${path}`
      })
    ]
  }
  return ans
}