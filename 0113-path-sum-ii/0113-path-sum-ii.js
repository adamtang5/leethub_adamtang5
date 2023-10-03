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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  const ans = [];
  const dfs = (node, runningSum, runningVals) => {
    if (!node) return;
    const next = [...runningVals, node.val];
    if (!node.left && !node.right && runningSum + node.val === targetSum) {
      ans.push(next);
    }
    dfs(node.left, runningSum + node.val, next);
    dfs(node.right, runningSum + node.val, next);
  };
  dfs(root, 0, []);
  return ans;
};