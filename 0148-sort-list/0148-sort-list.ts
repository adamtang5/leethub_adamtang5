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

function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head
  let slow = head
  let fast = head
  while (fast && fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }
  let prev1 = head
  let prev2 = slow.next
  slow.next = null
  prev1 = sortList(prev1)
  prev2 = sortList(prev2)
  
  function merge(head1: ListNode | null, head2: ListNode | null): ListNode | null {
    let prev = new ListNode()
    let curr1 = head1
    let curr2 = head2
    let curr = prev
    while (curr1 && curr2) {
      if (curr1.val <= curr2.val) {
        curr.next = curr1
        curr1 = curr1.next
      } else {
        curr.next = curr2
        curr2 = curr2.next
      }
      curr = curr.next
    }
    if (curr1) {
      curr.next = curr1
    } else {
      curr.next = curr2
    }
    return prev.next
  }
  
  return merge(prev1, prev2)
}