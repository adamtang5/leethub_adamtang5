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
  public ListNode merge2Lists(ListNode list1, ListNode list2) {
    ListNode dh = new ListNode();
    ListNode curr1 = list1;
    ListNode curr2 = list2;
    ListNode currDH = dh;
    while (curr1 != null && curr2 != null) {
      if (curr1.val <= curr2.val) {
        currDH.next = curr1;
        curr1 = curr1.next;
      } else {
        currDH.next = curr2;
        curr2 = curr2.next;
      }
      currDH = currDH.next;
    }
    currDH.next = curr1 != null ? curr1 : curr2;
    return dh.next;
  }
  
  public ListNode mergeKLists(ListNode[] lists) {
    if (lists.length == 0) return null;
    
    while (lists.length > 1) {
      ListNode[] newLists = new ListNode[(lists.length + 1) / 2];
      for (int i = 0; i < newLists.length; i++) {
        if (2 * i + 1 < lists.length) {
          newLists[i] = merge2Lists(lists[2 * i], lists[2 * i + 1]);
        } else if (2 * i + 1 == lists.length) {
          newLists[i] = lists[2 * i];
        }
        ListNode curr = newLists[i];
      }
      lists = newLists;
    }
    return lists[0];
  }
}