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
var maxDepth = function(root) {
  if (!root) return 0;
  let depth = 0;
  const levels = {};
  levels[depth] = [root];
  while (levels[depth].length) {
    levels[depth + 1] = levels[depth + 1] || [];
    levels[depth].forEach(node => {
      if (node.left) levels[depth + 1].push(node.left);
      if (node.right) levels[depth + 1].push(node.right);
    });
    depth++;
  }
  return depth;
};