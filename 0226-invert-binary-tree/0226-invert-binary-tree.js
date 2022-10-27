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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return root;
    const right = root.right;
    root.right = root.left;
    root.left = right;
    if (root.right) invertTree(root.right);
    if (root.left) invertTree(root.left);
    return root;
};