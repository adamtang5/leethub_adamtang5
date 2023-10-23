/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *  this.val = val === undefined ? null : val;
 *  this.left = left === undefined ? null : left;
 *  this.right = right === undefined ? null : right;
 *  this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  const queue = root ? [[0, root]] : [];
  const levels = [];
  while (queue.length) {
    const [level, node] = queue.shift();
    if (level > levels.length - 1) levels.push([]);
    levels[level].push(node);
    if (node.left) queue.push([level + 1, node.left]);
    if (node.right) queue.push([level + 1, node.right]);
  }
  let curr;
  while (levels.length) {
    const level = levels.shift();
    curr = null;
    let last;
    while (level.length) {
      last = level.pop();
      last.next = curr;
      curr = last;
    }
  }
  return root;
};