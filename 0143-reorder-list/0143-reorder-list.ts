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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  let slow: ListNode | null = head
  let fast: ListNode | null = head.next
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  let second = slow.next
  slow.next = null
  let prev: ListNode | null
  let next: ListNode | null
  while (second) {
    next = second.next
    second.next = prev
    prev = second
    second = next
  }
  let first: ListNode | null = head
  second = prev
  let next1: ListNode | null
  let next2: ListNode | null
  while (second) {
    next1 = first.next
    next2 = second.next
    first.next = second
    second.next = next1
    first = next1
    second = next2
  }
}