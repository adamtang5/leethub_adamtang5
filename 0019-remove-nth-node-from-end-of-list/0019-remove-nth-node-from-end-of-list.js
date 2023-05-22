/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let [ahead, behind] = [head, head];
  while (n >= 0) {
    if (ahead) {
      ahead = ahead.next;
      n--;
    } else {
      return head.next;
    }
  }
  
  while (ahead) {
    ahead = ahead.next;
    behind = behind.next;
  }
  behind.next = behind.next.next;
  return head;
};