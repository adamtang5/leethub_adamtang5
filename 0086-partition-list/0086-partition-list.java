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
  public ListNode partition(ListNode head, int x) {
    if (head == null) return head;
    ListNode left = new ListNode();
    ListNode right = new ListNode();
    ListNode curr = head;
    ListNode leftTail = left;
    ListNode rightTail = right;
    ListNode nextNode;
    while (curr != null) {
      if (curr.val < x) {
        leftTail.next = curr;
        leftTail = leftTail.next;
      } else {
        rightTail.next = curr;
        rightTail = rightTail.next;
      }
      nextNode = curr.next;
      curr.next = null;
      curr = nextNode;
    }
    leftTail.next = right.next;
    return left.next;
  }
}