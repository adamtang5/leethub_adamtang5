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
  public ListNode detectCycle(ListNode head) {
    Set<ListNode> nodeSet = new HashSet<ListNode>();
    ListNode curr = head;
    while (curr != null) {
      if (nodeSet.contains(curr)) return curr;
      nodeSet.add(curr);
      curr = curr.next;
    }
    return null;
  }
}