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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root.left && !root.right) return [root.val.toString()];
  let ans = [];
  if (root.left) {
    ans = [
      ...ans,
      ...binaryTreePaths(root.left).map(path => {
        return `${root.val.toString()}->${path}`;
      })
    ];
  }
  if (root.right) {
    ans = [
      ...ans,
      ...binaryTreePaths(root.right).map(path => {
        return `${root.val.toString()}->${path}`;
      })
    ];
  }
  return ans;
};