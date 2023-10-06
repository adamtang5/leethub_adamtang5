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
  let runningSum = 0
  const stack1: TreeNode[] = root ? [root] : []
  const stack2: TreeNode[] = []
  let curr: TreeNode | null
  while (stack1.length) {
    curr = stack1.pop()
    stack2.push(curr)
    runningSum += curr.val
    if (curr.right) stack1.push(curr.right)
    if (curr.left) stack1.push(curr.left)
    if (!stack2[stack2.length - 1].left && !stack2[stack2.length - 1].right) {
      if (runningSum === targetSum) ans.push(stack2.map(node => node.val))
      while (stack1.length && stack2.length && stack1[stack1.length - 1] !== stack2[stack2.length - 1].right) {
        curr = stack2.pop()
        runningSum -= curr.val
      }
    }
  }
  return ans
};