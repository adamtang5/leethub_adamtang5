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
  public void dfs(TreeNode node, int curr, List<Integer> ans) {
    if (node.left == null && node.right == null) {
      int temp = ans.get(0);
      temp += curr + node.val;
      ans.set(0, temp);
    }
    if (node.left != null) dfs(node.left, 10 * (curr + node.val), ans);
    if (node.right != null) dfs(node.right, 10 * (curr + node.val), ans);
  }
  
  public int sumNumbers(TreeNode root) {
    List<Integer> ans = new ArrayList<Integer>();
    ans.add(0);
    dfs(root, 0, ans);
    return ans.get(0);
  }
}