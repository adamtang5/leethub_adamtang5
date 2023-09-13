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
  public void dfs(TreeNode node, int level, List<List<Integer>> trav) {
    if (node != null) {
      if (level > trav.size() - 1) trav.add(new ArrayList<Integer>());
      List<Integer> t = (List<Integer>) trav.get(level);
      t.add(node.val);
      dfs(node.left, level + 1, trav);
      dfs(node.right, level + 1, trav);
    }
  }
  
  public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> trav = new ArrayList();
    dfs(root, 0, (List<List<Integer>>) trav);
    return trav;
  }
}