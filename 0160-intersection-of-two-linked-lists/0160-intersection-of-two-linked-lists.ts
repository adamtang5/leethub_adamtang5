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
  let node1: ListNode | null = headA
  let node2: ListNode | null = headB
  while (node1 !== node2) {
    node1 = node1 ? node1.next : headB
    node2 = node2 ? node2.next : headA
  }
  return node1
}