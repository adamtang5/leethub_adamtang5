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
    const queue = [root];
    while (queue.length) {
        let curr = queue.shift();
        const right = curr.right;
        curr.right = curr.left;
        curr.left = right;
        if (curr.right) queue.push(curr.right);
        if (curr.left) queue.push(curr.left);
    }
    return root;
};