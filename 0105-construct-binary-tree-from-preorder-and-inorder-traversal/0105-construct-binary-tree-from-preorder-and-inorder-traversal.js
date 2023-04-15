/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  const inIdx = {};
  inorder.forEach((el, i) => inIdx[el] = i);
  
  const helper = preVals => {
    if (!preVals.length) return null;
    if (preVals.length === 1) return new TreeNode(preVals[0]);
    
    const [rootVal, leftVals, rightVals] = [preVals[0], [], []];
    for (let i = 1; i < preVals.length; i++) {
      if (inIdx[preVals[i]] < inIdx[rootVal]) {
        leftVals.push(preVals[i]);
      } else {
        rightVals.push(preVals[i]);
      }
    }
    return new TreeNode(rootVal, helper(leftVals), helper(rightVals));
  };
  
  return helper(preorder);
};