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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  const queue = root ? [[0, root]] : [];
  const scores = [];
  while (queue.length) {
    const [level, node] = queue.shift();
    if (level > scores.length - 1) scores.push([]);
    scores[level].push(node.val);
    if (node.left) queue.push([level + 1, node.left]);
    if (node.right) queue.push([level + 1, node.right]);
  }
  return scores.map(level => level.reduce((sum, score) => sum + score, 0) / level.length);
};