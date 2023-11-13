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
var maxPathSum = function(root) {
  let ans = root.val;
  
  const dfs = node => {
    if (!node) return 0;
    const leftMax = Math.max(dfs(node.left), 0);
    const rightMax = Math.max(dfs(node.right), 0);
    
    ans = Math.max(ans, node.val + leftMax + rightMax);
    return node.val + Math.max(leftMax, rightMax);
  };
  
  dfs(root);
  return ans;
};