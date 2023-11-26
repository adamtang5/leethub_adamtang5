/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  let ans = 0;
  
  const dfs = (node, curr) => {
    if (!node.left && !node.right) ans += curr + node.val;
    if (node.left) dfs(node.left, 10 * (curr + node.val));
    if (node.right) dfs(node.right, 10 * (curr + node.val));
  };
  
  dfs(root, 0);
  return ans;
};