/**
 * Definition for singly-linked list.
 * public class ListNode {
 *   int val;
 *   ListNode next;
 *   ListNode() {}
 *   ListNode(int val) { this.val = val; }
 *   ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
  public ListNode swapPairs(ListNode head) {
    if (head == null) return head;
    
    ListNode dh = new ListNode();
    dh.next = head;
    ListNode prev = dh;
    ListNode next = prev.next;
    ListNode curr = next.next;
    
    while (next.next != null) {
      prev.next = curr;
      next.next = curr.next;
      curr.next = next;
      if (next.next == null) break;
      prev = next;
      next = next.next;
      curr = next.next;
    }
    return dh.next;
  }
}