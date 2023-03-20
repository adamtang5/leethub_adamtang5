/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const prev = new ListNode();
  let [curr1, curr2, curr, carry] = [l1, l2, prev, 0];
  while (curr1 || curr2) {
    if (curr1 && curr2) {
      curr.next = new ListNode(curr1.val + curr2.val + carry);
    } else if (curr1 && !curr2) {
      curr.next = new ListNode(curr1.val + carry);
    } else if (!curr1 && curr2) {
      curr.next = new ListNode(curr2.val + carry);
    }
    if (curr1) curr1 = curr1.next;
    if (curr2) curr2 = curr2.next;
    curr = curr.next;
    if (curr.val > 9) {
      carry = 1;
      curr.val %= 10;
    } else {
      carry = 0;
    }
  }
  if (carry) curr.next = new ListNode(carry);
  return prev.next;
};