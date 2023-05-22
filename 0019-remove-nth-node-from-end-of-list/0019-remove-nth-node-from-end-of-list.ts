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
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let len: number = 0
  let curr: ListNode = head
  while (curr) {
    len++
    curr = curr.next
  }
  
  let [i, dh] = [-1, new ListNode()]
  dh.next = head
  curr = dh
  
  while (i < len - n - 1) {
    curr = curr.next
    i++
  }
  let prev: ListNode = curr
  curr = curr.next
  prev.next = curr.next
  return dh.next
};