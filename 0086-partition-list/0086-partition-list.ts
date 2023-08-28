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
function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head) return head
  let left: ListNode | null = new ListNode()
  let right: ListNode | null = new ListNode()
  let curr: ListNode | null = head
  let leftTail = left
  let rightTail = right
  let nextNode: ListNode | null
  while (curr) {
    if (curr.val < x) {
      leftTail.next = curr
      leftTail = leftTail.next
    } else {
      rightTail.next = curr
      rightTail = rightTail.next
    }
    nextNode = curr.next
    curr.next = null
    curr = nextNode
  }
  leftTail.next = right.next
  return left.next
}