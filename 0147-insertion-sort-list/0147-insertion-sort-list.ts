/**
 * Definition for singly-linked list.
 * class ListNode {
 *   val: number
 *   next: ListNode | null
 *   constructor(val?: number, next?: ListNode | null) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 *   }
 * }
 */

function insertionSortList(head: ListNode | null): ListNode | null {
  const dh: ListNode | null = new ListNode()
  let orig: ListNode | null = head
  let currPrev: ListNode | null = dh
  let currNext: ListNode | null = dh.next
  while (orig) {
    while (currNext && currNext.val <= orig.val) {
      currNext = currNext.next
      currPrev = currPrev.next
    }
    currPrev.next = orig
    orig = orig.next
    currPrev.next.next = currNext
    currPrev = dh
    currNext = dh.next
  }
  return currNext
}