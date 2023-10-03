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
    if (!node.left && !node.right && runningSum + node.val === targetSum) {
      ans.push([...runningVals, node.val]);
    }
    dfs(node.left, runningSum + node.val, [...runningVals, node.val]);
    dfs(node.right, runningSum + node.val, [...runningVals, node.val]);
  };
  dfs(root, 0, []);
  return ans;
};