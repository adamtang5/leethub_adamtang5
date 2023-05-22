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
  public ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode ahead = head;
    ListNode behind = head;
    while (n >= 0) {
      if (ahead != null) {
        ahead = ahead.next;
        n--;
      } else {
        return head.next;
      }
    }
    while (ahead != null) {
      ahead = ahead.next;
      behind = behind.next;
    }
    behind.next = behind.next.next;
    return head;
  }
}