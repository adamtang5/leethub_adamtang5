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
  public boolean isSameTree(TreeNode p, TreeNode q) {
    if (p == null && q == null) return true;
    if ((p == null) != (q == null)) return false;
    if (p.left == null && p.right == null && q.left == null && q.right == null) return p.val == q.val;
    return p.val != q.val ? false : isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
}