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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  const nodes: Set<ListNode> = new Set()
  let curr: ListNode | null = headA
  while (curr) {
    nodes.add(curr)
    curr = curr.next
  }
  curr = headB
  while (curr) {
    if (nodes.has(curr)) return curr
    curr = curr.next
  }
  return null
}