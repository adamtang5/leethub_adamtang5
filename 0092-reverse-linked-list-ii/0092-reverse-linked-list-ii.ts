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
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (left === right) return head
  let i = 1
  let rev: ListNode | null = null
  let curr: ListNode | null = head
  let prev: ListNode | null
  let remain: ListNode | null
  if (left === 1) {
    prev = new ListNode()
    prev.next = head
  }
  while (i <= left - 1) {
    if (i === left - 1) prev = curr
    curr = curr.next
    i++
  }
  while (i <= right) {
    remain = curr.next
    curr.next = rev
    rev = curr
    curr = remain
    i++
  }
  prev.next.next = remain
  prev.next = rev
  return left === 1 ? rev : head
}