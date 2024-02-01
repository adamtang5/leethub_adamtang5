/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  const dh = new ListNode();
  
  let [orig, currPrev, currNext] = [head, dh, dh.next];
  while (orig) {
    while (currNext && currNext.val <= orig.val) {
      currNext = currNext.next;
      currPrev = currPrev.next;
    }
    currPrev.next = orig;
    orig = orig.next;
    currPrev.next.next = currNext;
    [currPrev, currNext] = [dh, dh.next];
  }
  return dh.next;
};