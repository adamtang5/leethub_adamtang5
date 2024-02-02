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
  public ListNode merge(ListNode head1, ListNode head2) {
    ListNode prev = new ListNode();
    ListNode curr1 = head1;
    ListNode curr2 = head2;
    ListNode curr = prev;
    while (curr1 != null && curr2 != null) {
      if (curr1.val <= curr2.val) {
        curr.next = curr1;
        curr1 = curr1.next;
      } else {
        curr.next = curr2;
        curr2 = curr2.next;
      }
      curr = curr.next;
    }
    if (curr1 != null) {
      curr.next = curr1;
    } else {
      curr.next = curr2;
    }
    return prev.next;
  }
  
  public ListNode sortList(ListNode head) {
    if (head == null || head.next == null) return head;
    ListNode slow = head;
    ListNode fast = head;
    while (fast != null && fast.next != null && fast.next.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    ListNode left = head;
    ListNode right = slow.next;
    slow.next = null;
    left = sortList(left);
    right = sortList(right);
    
    return merge(left, right);
  }
}