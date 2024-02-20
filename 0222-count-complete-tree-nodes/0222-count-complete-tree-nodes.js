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
  let [left, right] = [root, root];
  let [lHt, rHt] = [0, 0];
  while (left) {
    lHt++;
    left = left.left;
  }
  while (right) {
    rHt++;
    right = right.right;
  }
  if (lHt === rHt) return 2 ** lHt - 1;
  return 1 + countNodes(root.left) + countNodes(root.right);
};