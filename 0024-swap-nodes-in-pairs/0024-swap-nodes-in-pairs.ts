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
function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) return head
  
  const dh = new ListNode()
  dh.next = head
  let prev = dh
  let next = prev.next
  let curr = next.next
  
  while (next.next) {
    prev.next = curr
    next.next = curr.next
    curr.next = next
    if (!next.next) break
    prev = next
    next = next.next
    curr = next.next
  }
  return dh.next
}