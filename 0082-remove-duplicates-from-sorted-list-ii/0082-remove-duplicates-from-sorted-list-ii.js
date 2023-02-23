/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return head;
  let initVal = head.val;
  let prev = new ListNode(), curr = head;
  prev.next = head;
  while (curr) {
    if (curr.next && curr.next.val !== curr.val) {
      prev = prev.next;
      curr = curr.next;
    } else if (curr.next && curr.next.val === curr.val) {
      while (curr.next && curr.next.val === curr.val) {
        curr = curr.next;
      }
      prev.next = curr.next;
      if (curr.val === initVal) {
        head = prev.next;
        if (head) initVal = head.val;
      }
      if (!curr.next) {
        return head;
      } else {
        curr = prev.next;
      }
    } else {
      return head;
    }
  }
};