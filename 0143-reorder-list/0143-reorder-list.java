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
    List<ListNode> stack = new ArrayList<ListNode>();
    ListNode curr = head;
    while (curr != null) {
      stack.add(curr);
      curr = curr.next;
    }
    curr = head;
    stack.remove(0);
    while (!stack.isEmpty()) {
      curr.next = stack.remove(stack.size() - 1);
      curr = curr.next;
      if (!stack.isEmpty()) {
        curr.next = stack.remove(0);
        curr = curr.next;
      }
    }
    curr.next = null;
  }
}