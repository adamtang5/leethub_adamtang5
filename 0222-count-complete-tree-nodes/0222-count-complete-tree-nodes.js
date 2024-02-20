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
var countNodes = function(root) {
  if (!root) return 0;
  const queue = [[0, root]];
  const levels = [];
  while (queue.length) {
    const [level, node] = queue.shift();
    if (level > levels.length - 1) levels.push([]);
    levels[level].push(node);
    if (node.left) queue.push([level + 1, node.left]);
    if (node.right) queue.push([level + 1, node.right]);
  }
  return 2 ** (levels.length - 1) - 1 + levels.at(-1).length;
};