/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  const validNode = (lb, val, ub) => {
    return val > lb && val < ub;
  };
  
  const queue = [[-Infinity, root, Infinity]];
  while (queue.length) {
    const [lb, curr, ub] = queue.shift();
    if (!validNode(lb, curr.val, ub)) return false;
    if (curr.left) queue.push([lb, curr.left, curr.val]);
    if (curr.right) queue.push([curr.val, curr.right, ub]);
  }
  return true;
};