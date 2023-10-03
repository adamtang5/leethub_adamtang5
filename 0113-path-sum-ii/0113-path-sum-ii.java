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
  public void dfs(TreeNode node, int runningSum, List<Integer> runningVals, int targetSum, List<List<Integer>> ans) {
    if (node == null) return;
    List<Integer> next = new ArrayList<Integer>();
    next.addAll(runningVals);
    next.add(node.val);
    if (node.left == null && node.right == null && runningSum + node.val == targetSum) {
      ans.add(next);
    }
    dfs(node.left, runningSum + node.val, next, targetSum, ans);
    dfs(node.right, runningSum + node.val, next, targetSum, ans);
  }
  
  public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
    List<List<Integer>> ans = new ArrayList();
    dfs(root, 0, new ArrayList<Integer>(), targetSum, ans);
    return ans;
  }
}