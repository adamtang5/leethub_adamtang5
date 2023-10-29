/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode next;
 *   ListNode(int x) {
 *     val = x;
 *     next = null;
 *   }
 * }
 */
public class Solution {
  public boolean hasCycle(ListNode head) {
    ListNode curr = head;
    for (int n = 0; n <= 10000; n++) {
      if (curr == null) return false;
      curr = curr.next;
    }
    return true;
  }
}