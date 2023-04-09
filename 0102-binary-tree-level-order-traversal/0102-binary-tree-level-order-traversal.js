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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const queue = root ? [[0, root]] : [];
  const ans = [];
  while (queue.length) {
    const [level, node] = queue.shift();
    if (level > ans.length - 1) ans.push([]);
    ans[level].push(node.val);
    if (node.left) queue.push([level + 1, node.left]);
    if (node.right) queue.push([level + 1, node.right]);
  }
  return ans;
};