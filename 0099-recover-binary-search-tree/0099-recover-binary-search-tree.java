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
  public void dfs(TreeNode node, List<TreeNode> nodes) {
    if (node == null) return;
    dfs(node.left, nodes);
    nodes.add(node);
    dfs(node.right, nodes);
  }
  
  public void recoverTree(TreeNode root) {
    List<TreeNode> nodes = new ArrayList<TreeNode>();
    dfs(root, nodes);
    List<Integer> vals = nodes.stream()
      .map(node -> node.val)
      .collect(Collectors.toList());
    Collections.sort(vals);
    for (int i = 0; i < nodes.size(); i++) {
      TreeNode node = (TreeNode) nodes.get(i);
      node.val = (int) vals.get(i);
    }
  }
}