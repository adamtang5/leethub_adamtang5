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
    int initVal = head.val;
    ListNode prev = new ListNode();
    ListNode curr = head;
    prev.next = head;
    while (curr != null) {
      if (curr.next != null && curr.next.val != curr.val) {
        prev = prev.next;
        curr = curr.next;
      } else if (curr.next != null && curr.next.val == curr.val) {
        while (curr.next != null && curr.next.val == curr.val) curr = curr.next;
        prev.next = curr.next;
        if (curr.val == initVal) {
          head = prev.next;
          if (head != null) initVal = head.val;
        }
        if (curr.next == null) {
          break;
        } else {
          curr = prev.next;
        }
      } else {
        break;
      }
    }
    return head;
  }
}