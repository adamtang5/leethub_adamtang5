/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  const stack = [];
  let curr = head;
  while (curr) {
    stack.push(curr);
    curr = curr.next;
  }
  curr = head;
  stack.shift();
  while (stack.length) {
    curr.next = stack.pop();
    curr = curr.next;
    if (stack.length) {
      curr.next = stack.shift();
      curr = curr.next;
    }
  }
  curr.next = null;
};