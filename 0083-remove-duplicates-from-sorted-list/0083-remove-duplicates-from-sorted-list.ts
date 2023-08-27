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
function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head
  let curr: ListNode | null = head
  let currVal: number = head.val
  while (curr) {
    while (curr.next && curr.next.val === currVal) curr.next = curr.next.next
    curr = curr.next
    if (curr) currVal = curr.val
  }
  return head
}