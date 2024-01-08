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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  const stack: ListNode[] = []
  let curr: ListNode | null = head
  while (curr) {
    stack.push(curr)
    curr = curr.next
  }
  curr = head
  stack.shift()
  while (stack.length) {
    curr.next = stack.pop()
    curr = curr.next
    if (stack.length) {
      curr.next = stack.shift()
      curr = curr.next
    }
  }
  curr.next = null
}