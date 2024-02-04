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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dh: ListNode = new ListNode()
  dh.next = head
  let prev: ListNode | null = dh
  let curr: ListNode | null = head
  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next
      curr = prev.next
    } else if (curr) {
      curr = curr.next
      prev = prev.next
    }
  }
  return dh.next
}