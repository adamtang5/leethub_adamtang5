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
  const decompose = (preorder, inorder) => {
    const ans = {
      rootVal: null,
      leftInorder: null,
      rightInorder: null,
      leftPreorder: null,
      rightPreorder: null,
    };
    
    if (preorder.length) {
      ans.rootVal = preorder[0];
      ans.leftInorder = inorder.slice(0, inorder.indexOf(ans.rootVal));
      ans.rightInorder = inorder.slice(inorder.indexOf(ans.rootVal) + 1);
      ans.leftPreorder = preorder.filter(el => ans.leftInorder.includes(el));
      ans.rightPreorder = preorder.filter(el => ans.rightInorder.includes(el));
    }
    return ans;
  };
  
  const parsed = decompose(preorder, inorder);
  if (parsed.rootVal === null) {
    return null;
  } else {
    return new TreeNode(
      parsed.rootVal,
      buildTree(parsed.leftPreorder, parsed.leftInorder),
      buildTree(parsed.rightPreorder, parsed.rightInorder),
    )
  }
};