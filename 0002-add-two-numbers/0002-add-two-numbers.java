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
  public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode prev = new ListNode();
    ListNode curr1 = l1;
    ListNode curr2 = l2;
    ListNode curr = prev;
    int carry = 0;
    while (curr1 != null || curr2 != null) {
      int val1 = curr1 != null ? curr1.val : 0;
      int val2 = curr2 != null ? curr2.val : 0;
      curr.next = new ListNode(val1 + val2 + carry);
      if (curr1 != null) {
        curr1 = curr1.next;
      }
      if (curr2 != null) {
        curr2 = curr2.next;
      }
      curr = curr.next;
      carry = (int) Math.floor(curr.val / (double) 10);
      curr.val %= 10;
    }
    if (carry > 0) curr.next = new ListNode(carry);
    return prev.next;
  }
}