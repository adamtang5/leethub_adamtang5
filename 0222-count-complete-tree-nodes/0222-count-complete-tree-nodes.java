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
  public int countNodes(TreeNode root) {
    if (root == null) return 0;
    TreeNode left = root;
    TreeNode right = root;
    int lHt = 1;
    int rHt = 1;
    while (left.left != null) {
      left = left.left;
      lHt++;
    }
    while (right.right != null) {
      right = right.right;
      rHt++;
    }
    if (lHt == rHt) return (1 << lHt) - 1;
    return 1 + countNodes(root.left) + countNodes(root.right);
  }
}