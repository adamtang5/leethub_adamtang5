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
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let curr: ListNode = head
  let prev: ListNode = head
  let rev: ListNode | null = null
  let [len, i] = [0, 0]
  let remain: ListNode | null
  let newPrev: ListNode | null
  let j: number
  
  while (curr) {
    curr = curr.next
    len++
  }
  curr = head
  
  while (len - i >= k) {
    j = 0
    rev = null
    while (j < k) {
      remain = curr.next
      curr.next = rev
      rev = curr
      curr = remain
      j++
    }
    if (i === 0) {
      prev.next = remain
      head = rev
    } else {
      prev.next.next = remain
      newPrev = prev.next
      prev.next = rev
      prev = newPrev
    }
    i += k
  }
  return head
}