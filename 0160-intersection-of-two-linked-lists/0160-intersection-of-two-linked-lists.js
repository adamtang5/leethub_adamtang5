/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let [node1, node2] = [headA, headB];
  while (node1 !== node2) {
    node1 = node1 ? node1.next : headB;
    node2 = node2 ? node2.next : headA;
  }
  return node1;
};