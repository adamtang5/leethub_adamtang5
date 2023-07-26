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
  public ListNode rotateRight(ListNode head, int k) {
    if (head == null) return head;
    ListNode curr = head;
    int len = 0;
    int i = 0;
    while (curr != null) {
      curr = curr.next;
      len++;
    }
    int headIdx = (len - (k % len)) % len;
    if (headIdx == 0) return head;
    curr = head;
    while (i < headIdx - 1) {
      curr = curr.next;
      i++;
    }
    ListNode last = curr;
    ListNode newHead = curr.next;
    last.next = null;
    curr = newHead;
    while (curr.next != null) curr = curr.next;
    curr.next = head;
    return newHead;
  }
}