/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  const visited = new Set();
  let curr = head;
  while (curr) {
    if (visited.has(curr)) return true;
    visited.add(curr);
    curr = curr.next;
  }
  return false;
};