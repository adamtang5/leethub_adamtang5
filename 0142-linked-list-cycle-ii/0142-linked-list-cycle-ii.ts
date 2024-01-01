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

function detectCycle(head: ListNode | null): ListNode | null {
  const nodeSet: Set<ListNode> = new Set()
  let curr: ListNode | null = head
  while (curr) {
    if (nodeSet.has(curr)) return curr
    nodeSet.add(curr)
    curr = curr.next
  }
  return null
}