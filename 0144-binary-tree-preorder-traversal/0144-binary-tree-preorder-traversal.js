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
var preorderTraversal = function(root) {
  const ans = [];
  const stack = root ? [root] : [];
  let popped;
  while (stack.length) {
    popped = stack.pop();
    ans.push(popped.val);
    if (popped.right) stack.push(popped.right);
    if (popped.left) stack.push(popped.left);
  }
  return ans;
};