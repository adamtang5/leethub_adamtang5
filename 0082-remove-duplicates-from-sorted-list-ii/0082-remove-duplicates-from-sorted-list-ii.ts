/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head
  let initVal: number = head.val
  let prev: ListNode | null = new ListNode()
  let curr: ListNode | null = head
  prev.next = head
  while (curr) {
    if (curr.next && curr.next.val !== curr.val) {
      prev = prev.next
      curr = curr.next
    } else if (curr.next && curr.next.val === curr.val) {
      while (curr.next && curr.next.val === curr.val) curr = curr.next
      prev.next = curr.next
      if (curr.val === initVal) {
        head = prev.next
        if (head) initVal = head.val
      }
      if (!curr.next) {
        return head
      } else {
        curr = prev.next
      }
    } else {
      return head
    }
  }
}