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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head) return head
  let curr: ListNode | null = head
  let [len, i] = [0, 0]
  while (curr) {
    curr = curr.next
    len++
  }
  const headIdx: number = (len - (k % len)) % len
  if (headIdx === 0) return head
  curr = head
  while (i < headIdx - 1) {
    curr = curr.next
    i++
  }
  const last: ListNode | null = curr
  const newHead: ListNode | null = curr.next
  last.next = null
  curr = newHead
  while (curr.next) curr = curr.next
  curr.next = head
  return newHead
}