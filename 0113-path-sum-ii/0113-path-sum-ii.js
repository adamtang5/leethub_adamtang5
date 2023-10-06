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
  let runningSum = 0;
  const stack1 = root ? [root] : [];
  const stack2 = [];
  let curr;
  while (stack1.length) {
    curr = stack1.pop();
    stack2.push(curr);
    runningSum += curr.val;
    if (curr.right) stack1.push(curr.right);
    if (curr.left) stack1.push(curr.left);
    if (!stack2.at(-1).left && !stack2.at(-1).right) {
      if (runningSum === targetSum) ans.push(stack2.map(node => node.val));
      while (stack1.length && stack2.length && stack1.at(-1) !== stack2.at(-1).right) {
        curr = stack2.pop();
        runningSum -= curr.val;
      }
    }
  }
  return ans;
};