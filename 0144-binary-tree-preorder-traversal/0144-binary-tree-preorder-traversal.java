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
  public void dfs(TreeNode node, List<Integer> ans) {
    if (node == null) return;
    ans.add(node.val);
    dfs(node.left, ans);
    dfs(node.right, ans);
  }
  
  public List<Integer> preorderTraversal(TreeNode root) {
    List<Integer> ans = new ArrayList<Integer>();
    dfs(root, ans);
    return ans;
  }
}