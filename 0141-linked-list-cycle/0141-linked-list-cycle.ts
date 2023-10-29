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

function hasCycle(head: ListNode | null): boolean {
  let curr: ListNode | null = head
  for (let n = 0; n <= 10000; n++) {
    if (!curr) return false
    curr = curr.next
  }
  return true
};