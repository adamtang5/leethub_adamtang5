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
  public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
    ListNode dh = new ListNode();
    ListNode c1 = list1;
    ListNode c2 = list2;
    ListNode cdh = dh;
    
    while (c1 != null && c2 != null) {
      if (c1.val <= c2.val) {
        cdh.next = c1;
        c1 = c1.next;
      } else {
        cdh.next = c2;
        c2 = c2.next;
      }
      cdh = cdh.next;
    }
    cdh.next = c1 != null ? c1 : c2;
    return dh.next;
  }
}