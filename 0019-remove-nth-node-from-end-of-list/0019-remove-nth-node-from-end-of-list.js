/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let [len, curr] = [0, head];
  while (curr) {
      len++;
      curr = curr.next;
  }

  let [i, dh] = [-1, new ListNode()];
  dh.next = head;
  curr = dh;

  while (i < len - n - 1) {
      curr = curr.next;
      i++;
  }
  let prev = curr;
  curr = curr.next;
  prev.next = curr.next;
  return dh.next;
};