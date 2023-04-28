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
 * @return {boolean}
 */
var isBalanced = function(root) {
  const dfs = (node) => {
    if (!node) return [true, 0];
    const [lBal, lHt] = dfs(node.left);
    const [rBal, rHt] = dfs(node.right);
    return [lBal && rBal && Math.abs(lHt - rHt) <= 1, Math.max(lHt, rHt) + 1];
  }
  
  return dfs(root)[0];
};