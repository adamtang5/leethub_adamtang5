/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let dh = new ListNode();
  dh.next = head;
  let [prev, curr] = [dh, head];
  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
      curr = prev.next;
    } else if (curr) {
      curr = curr.next;
      prev = prev.next;      
    }
  }
  return dh.next;
};