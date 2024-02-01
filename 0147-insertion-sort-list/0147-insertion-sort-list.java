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
  public ListNode insertionSortList(ListNode head) {
    ListNode dh = new ListNode();
    ListNode orig = head;
    ListNode currPrev = dh;
    ListNode currNext = dh.next;
    while (orig != null) {
      while (currNext != null && currNext.val <= orig.val) {
        currNext = currNext.next;
        currPrev = currPrev.next;
      }
      currPrev.next = orig;
      orig = orig.next;
      currPrev.next.next = currNext;
      currPrev = dh;
      currNext = dh.next;
    }
    return dh.next;
  }
}