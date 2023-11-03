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
  let [lenA, lenB] = [0, 0];
  let [currA, currB] = [headA, headB];
  while (currA) {
    lenA++;
    currA = currA.next;
  }
  while (currB) {
    lenB++;
    currB = currB.next;
  }
  console.log(lenA, lenB);
  [currA, currB] = [headA, headB];
  if (lenA > lenB) {
    for (let i = lenA - lenB; i > 0; i--) currA = currA.next;
  } else if (lenB > lenA) {
    for (let i = lenB - lenA; i > 0; i--) currB = currB.next;
  }
  while (currA) {
    if (currA === currB) break;
    currA = currA.next;
    currB = currB.next;
  }
  return currA;
};