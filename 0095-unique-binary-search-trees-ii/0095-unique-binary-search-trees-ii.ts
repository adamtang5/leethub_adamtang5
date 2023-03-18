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

function generateTrees(n: number): Array<TreeNode | null> {
  function range(lb: number, ub: number): number[] {
    const ans: number[] = []
    let n = lb
    while (n <= ub) {
      ans.push(n)
      n++
    }
    return ans
  }

  function cloneTree(tree: TreeNode): TreeNode {
    const newTree = new TreeNode(tree.val)
    if (tree.left) newTree.left = cloneTree(tree.left)
    if (tree.right) newTree.right = cloneTree(tree.right)
    return newTree
  }

  const dp = {}
  
  function treeMakerHelper(lb: number, ub: number): void {
    if (lb === ub) {
      dp[`${lb}-${ub}`] = dp[`${lb}-${ub}`] || [new TreeNode(lb)]
      return
    }
    
    const trees: TreeNode[] = []
    for (let rootVal = lb; rootVal <= ub; rootVal++) {
      treeMakerHelper(lb, rootVal - 1)
      treeMakerHelper(rootVal + 1, ub)
      if (rootVal === ub) {
        dp[`${lb}-${rootVal - 1}`].forEach(leftTree => {
          const newTree = new TreeNode(rootVal)
          newTree.left = leftTree
          trees.push(newTree)
        })
      } else if (rootVal === lb) {
        dp[`${rootVal + 1}-${ub}`].forEach(rightTree => {
          const newTree = new TreeNode(rootVal)
          newTree.right = rightTree
          trees.push(newTree)
        })
      } else {
        dp[`${lb}-${rootVal - 1}`].forEach(leftTree => {
          dp[`${rootVal + 1}-${ub}`].forEach(rightTree => {
            const newTree = new TreeNode(rootVal)
            newTree.left = leftTree
            newTree.right = rightTree
            trees.push(newTree)
          })
        })
      }
    }
    if (lb <= ub) dp[`${lb}-${ub}`] = dp[`${lb}-${ub}`] || trees
  }
  
  treeMakerHelper(1, n)
  return dp[`1-${n}`]
}