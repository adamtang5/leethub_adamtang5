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
  let curr = head;
  for (let n = 0; n <= 10000; n++) {
    if (!curr) return false;
    curr = curr.next;
  }
  return true;
};