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
var rightSideView = function(root) {
  const levels = root ? [[root]] : [[]];
  while (levels.at(-1).length) {
    levels.push([]);
    const next = levels.at(-1);
    levels.at(-2).forEach(node => {
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    });
  }
  if (!levels.at(-1).length) levels.pop();
  return levels.map(level => level.at(-1).val);
};