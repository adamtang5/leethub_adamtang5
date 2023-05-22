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
  let ahead: ListNode = head
  let behind: ListNode = head
  while (n >= 0) {
    if (ahead) {
      ahead = ahead.next
      n--
    } else {
      return head.next
    }
  }
  while (ahead) {
    ahead = ahead.next
    behind = behind.next
  }
  behind.next = behind.next.next
  return head
};