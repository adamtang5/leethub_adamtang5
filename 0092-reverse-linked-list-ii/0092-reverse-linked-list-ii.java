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
  public ListNode reverseBetween(ListNode head, int left, int right) {
    if (left == right) return head;
    int i = 1;
    ListNode rev = null;
    ListNode curr = head;
    ListNode prev = null;
    ListNode remain = null;
    if (left == 1) {
      prev = new ListNode();
      prev.next = head;
    }
    while (i <= left - 1) {
      if (i == left - 1) prev = curr;
      curr = curr.next;
      i++;
    }
    while (i <= right) {
      remain = curr.next;
      curr.next = rev;
      rev = curr;
      curr = remain;
      i++;
    }
    prev.next.next = remain;
    prev.next = rev;
    return left == 1 ? rev : head;
  }
}