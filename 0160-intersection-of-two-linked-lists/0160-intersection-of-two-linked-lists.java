/**
 * Definition for singly-linked list.
 * public class ListNode {
 *   int val;
 *   ListNode next;
 *   ListNode(int x) {
 *     val = x;
 *     next = null;
 *   }
 * }
 */
public class Solution {
  public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
    Set<ListNode> nodes = new HashSet<ListNode>();
    ListNode curr = headA;
    while (curr != null) {
      nodes.add(curr);
      curr = curr.next;
    }
    curr = headB;
    while (curr != null) {
      if (nodes.contains(curr)) return curr;
      curr = curr.next;
    }
    return null;
  }
}