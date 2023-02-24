/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if (!head) return head;
  let [left, right] = [new ListNode(), new ListNode()];
  let curr = head;
  let [leftTail, rightTail] = [left, right];
  let nextNode;
  while (curr) {
    if (curr.val < x) {
      leftTail.next = curr;
      leftTail = leftTail.next;
    } else {
      rightTail.next = curr;
      rightTail = rightTail.next;
    }
    nextNode = curr.next;
    curr.next = null;
    curr = nextNode;
  }
  leftTail.next = right.next;
  return left.next;
};