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
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *   int val;
 *   TreeNode left;
 *   TreeNode right;
 *   TreeNode() {}
 *   TreeNode(int val) { this.val = val; }
 *   TreeNode(int val, TreeNode left, TreeNode right) {
 *     this.val = val;
 *     this.left = left;
 *     this.right = right;
 *   }
 * }
 */
class Solution {
  public TreeNode helper(int lb, int ub, List<ListNode> lst) {
    if (lb == ub) return null;
    int mid = (lb + ub) / 2;
    return new TreeNode(
      lst.get(mid).val,
      helper(lb, mid, lst),
      helper(mid + 1, ub, lst)
    );
  }
  
  public TreeNode sortedListToBST(ListNode head) {
    List<ListNode> lst = new ArrayList<ListNode>();
    ListNode curr = head;
    while (curr != null) {
      lst.add(curr);
      curr = curr.next;
    }
    
    return helper(0, lst.size(), lst);
  }
}