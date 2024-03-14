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
  public ListNode reverseKGroup(ListNode head, int k) {
    ListNode curr = head;
    ListNode prevNode = head;
    ListNode revNode;
    int len = 0;
    int i = 0;
    ListNode remain = null;
    ListNode newPrev;
    int j;
    
    while (curr != null) {
      curr = curr.next;
      len++;
    }
    curr = head;
    
    while (len - i >= k) {
      j = 0;
      revNode = null;
      while (j < k) {
        remain = curr.next;
        curr.next = revNode;
        revNode = curr;
        curr = remain;
        j++;
      }
      if (i == 0) {
        prevNode.next = remain;
        head = revNode;
      } else {
        prevNode.next.next = remain;
        newPrev = prevNode.next;
        prevNode.next = revNode;
        prevNode = newPrev;
      }
      i += k;
    }
    return head;
  }
}