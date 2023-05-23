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
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const dh = new ListNode()
  let [curr1, curr2, currDH] = [list1, list2, dh]
  
  while (curr1 && curr2) {
    if (curr1.val <= curr2.val) {
      currDH.next = curr1
      curr1 = curr1.next
    } else {
      currDH.next = curr2
      curr2 = curr2.next
    }
    currDH = currDH.next
  }
  
  currDH.next = curr1 ? curr1 : curr2
  return dh.next
}