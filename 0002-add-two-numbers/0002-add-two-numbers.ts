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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const prev = new ListNode()
  let [curr1, curr2, curr, carry] = [l1, l2, prev, 0]
  while (curr1 || curr2) {
    curr.next = new ListNode((curr1?.val || 0) + (curr2?.val || 0) + carry);
    if (curr1) curr1 = curr1.next
    if (curr2) curr2 = curr2.next
    curr = curr.next
    carry = Math.floor(curr.val / 10)
    curr.val %= 10
  }
  if (carry) curr.next = new ListNode(carry)
  return prev.next
}