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

/*
1. starting with root, store value
2. iterate through left tree
3. if left tree is null, iterate through right tree
4. if any node value !== root value, return false
5. done when both left and right are null
*/
var isUnivalTree = function(root, rootVal=null) {
    rootVal = rootVal !== null ? rootVal : root.val;
    // base case
    if (root.val !== rootVal) return false;
    if (!root.left && !root.right) return true;
    
    // recursive step
    return (!root.left || isUnivalTree(root.left, rootVal)) && (!root.right || isUnivalTree(root.right, rootVal))
};