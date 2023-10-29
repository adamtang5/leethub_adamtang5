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
  const visited: Set<ListNode> = new Set()
  let curr: ListNode | null = head
  while (curr) {
    if (visited.has(curr)) return true
    visited.add(curr)
    curr = curr.next
  }
  return false
};