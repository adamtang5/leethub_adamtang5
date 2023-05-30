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
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  function merge2Lists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dh = new ListNode()
    let curr1: ListNode | null = list1
    let curr2: ListNode | null = list2
    let currDH: ListNode | null = dh
    
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
  
  if (!lists.length) return null
  let first: ListNode | null
  let second: ListNode | null
  while (lists.length > 1) {
    first = lists.shift()
    second = lists.shift()
    lists.push(merge2Lists(first, second))
  }
  return lists[0]
}