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
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  interface AuxNode {
    rootVal: number | null
    leftInorder: number[] | null
    rightInorder: number[] | null
    leftPreorder: number[] | null
    rightPreorder: number[] | null
  }

  function decompose(preorder: number[], inorder: number[]): AuxNode {
    const ans: AuxNode = {
      rootVal: null,
      leftInorder: null,
      rightInorder: null,
      leftPreorder: null,
      rightPreorder: null,
    };
    
    if (preorder.length) {
      ans.rootVal = preorder[0]
      ans.leftInorder = inorder.slice(0, inorder.indexOf(ans.rootVal))
      ans.rightInorder = inorder.slice(inorder.indexOf(ans.rootVal) + 1)
      ans.leftPreorder = preorder.filter(el => ans.leftInorder.includes(el))
      ans.rightPreorder = preorder.filter(el => ans.rightInorder.includes(el))
    }
    return ans
  }

  const parsed: AuxNode = decompose(preorder, inorder)
  if (parsed.rootVal === null) {
    return null
  } else {
    return new TreeNode(
      parsed.rootVal,
      buildTree(parsed.leftPreorder, parsed.leftInorder),
      buildTree(parsed.rightPreorder, parsed.rightInorder),
    )
  }
}