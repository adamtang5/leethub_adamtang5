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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  const queue = root ? [[root.val, root]] : [];
  while (queue.length) {
    const [sum, node] = queue.shift();
    if (!node.left && !node.right && sum === targetSum) return true;
    if (node.left) queue.push([sum + node.left.val, node.left]);
    if (node.right) queue.push([sum + node.right.val, node.right]);
  }
  return false;
};