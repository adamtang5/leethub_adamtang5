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
  public int dfs(TreeNode node, int[] ans) {
    if (node == null) return 0;
    int leftMax = Math.max(dfs(node.left, ans), 0);
    int rightMax = Math.max(dfs(node.right, ans), 0);
    ans[0] = Math.max(ans[0], node.val + leftMax + rightMax);
    return node.val + Math.max(leftMax, rightMax);
  }
  
  public int maxPathSum(TreeNode root) {
    int[] ans = new int[1];
    ans[0] = root.val;
    dfs(root, ans);
    return ans[0];
  }
}