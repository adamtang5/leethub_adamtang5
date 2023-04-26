/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  const list = [];
  let curr = head;
  while (curr) {
    list.push(curr);
    curr = curr.next;
  }
  
  const helper = (lb, ub) => {
    if (lb === ub) return null;
    const mid = Math.floor((lb + ub) / 2);
    return new TreeNode(list[mid].val, helper(lb, mid), helper(mid + 1, ub));
  };
  
  return helper(0, list.length);
};