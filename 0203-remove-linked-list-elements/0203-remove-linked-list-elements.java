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
  public ListNode removeElements(ListNode head, int val) {
    ListNode dh = new ListNode();
    dh.next = head;
    ListNode prev = dh;
    ListNode curr = head;
    while (curr != null) {
      if (curr.val == val) {
        prev.next = curr.next;
        curr = prev.next;
      } else if (curr != null) {
        curr = curr.next;
        prev = prev.next;
      }
    }
    return dh.next;
  }
}