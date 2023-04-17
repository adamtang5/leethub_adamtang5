/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  const inIdx = {};
  inorder.forEach((el, i) => inIdx[el] = i);
  
  const helper = (postLb, postUb) => {
    if (postLb == postUb) return null;
    const rootInIdx = inIdx[postorder[postUb - 1]];
    if (postUb - postLb === 1) return new TreeNode(inorder[rootInIdx]);
    let [l, r] = [postLb, postUb - 2];
    if (inIdx[postorder[r]] < rootInIdx) {
      return new TreeNode(inorder[rootInIdx], helper(postLb, postUb - 1), null);
    } else if (inIdx[postorder[l]] > rootInIdx) {
      return new TreeNode(inorder[rootInIdx], null, helper(postLb, postUb - 1));
    }
    
    let mid;
    while (l <= r) {
      mid = Math.floor((l + r) / 2);
      if (inIdx[postorder[mid]] < rootInIdx && inIdx[postorder[mid + 1]] > rootInIdx) {
        break;
      } else if (inIdx[postorder[mid]] < rootInIdx) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return new TreeNode(inorder[rootInIdx], helper(postLb, mid + 1), helper(mid + 1, postUb - 1));
  };
  
  return helper(0, postorder.length);
};