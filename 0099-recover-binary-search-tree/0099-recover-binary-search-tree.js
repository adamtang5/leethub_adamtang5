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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  const nodes = [];
  
  const dfs = node => {
    if (!node) return;
    dfs(node.left);
    nodes.push(node);
    dfs(node.right);
  };
  
  dfs(root);
  
  const vals = nodes.map(node => node.val);
  vals.sort((a, b) => a - b);
  
  nodes.forEach((node, i) => node.val = vals[i]);
};