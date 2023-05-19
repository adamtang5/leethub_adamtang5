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
  public boolean dfs(TreeNode node, int runningSum, int targetSum) {
    if (node == null) return false;
    if (node.left == null && node.right == null) return runningSum + node.val == targetSum;
    return node.left != null && dfs(node.left, runningSum + node.val, targetSum)
      || node.right != null && dfs(node.right, runningSum + node.val, targetSum);
  }
  
  public boolean hasPathSum(TreeNode root, int targetSum) {
    return dfs(root, 0, targetSum);
  }
}