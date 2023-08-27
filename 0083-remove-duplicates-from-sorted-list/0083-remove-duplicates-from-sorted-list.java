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
  public ListNode deleteDuplicates(ListNode head) {
    if (head == null) return head;
    ListNode curr = head;
    int currVal = head.val;
    while (curr != null) {
      while (curr.next != null && curr.next.val == currVal) curr.next = curr.next.next;
      curr = curr.next;
      if (curr != null) currVal = curr.val;
    }
    return head;
  }
}