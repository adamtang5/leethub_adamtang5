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
 * Definition for a binary tree node.
 * class TreeNode {
 *   val: number
 *   left: TreeNode | null
 *   right: TreeNode | null
 *   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 *   }
 * }
 */
function sortedListToBST(head: ListNode | null): TreeNode | null {
  const list: ListNode[] = []
  let curr: ListNode | null = head
  while (curr) {
    list.push(curr)
    curr = curr.next
  }
  
  function helper(lb: number, ub: number): TreeNode | null {
    if (lb === ub) return null
    const mid = Math.floor((lb + ub) / 2)
    return new TreeNode(list[mid].val, helper(lb, mid), helper(mid + 1, ub))
  }
  
  return helper(0, list.length)
}