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
  public void reorderList(ListNode head) {
    ListNode slow = head;
    ListNode fast = head.next;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    ListNode second = slow.next;
    slow.next = null;
    ListNode prev = null;
    ListNode next;
    while (second != null) {
      next = second.next;
      second.next = prev;
      prev = second;
      second = next;
    }
    ListNode first = head;
    second = prev;
    ListNode next1;
    ListNode next2;
    while (second != null) {
      next1 = first.next;
      next2 = second.next;
      first.next = second;
      second.next = next1;
      first = next1;
      second = next2;
    }
  }
}