/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  const nodeSet = new Set();
  let curr = head;
  while (curr) {
    if (nodeSet.has(curr)) return curr;
    nodeSet.add(curr);
    curr = curr.next;
  }
  return null;
};