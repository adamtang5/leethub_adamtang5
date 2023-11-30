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
  public List<Integer> rightSideView(TreeNode root) {
    List<List<TreeNode>> levels = new ArrayList();
    List<TreeNode> init = new ArrayList<TreeNode>();
    if (root != null) init.add(root);
    levels.add(init);
    while (!levels.get(levels.size() - 1).isEmpty()) {
      levels.add(new ArrayList<TreeNode>());
      List<TreeNode> next = levels.get(levels.size() - 1);
      levels.get(levels.size() - 2).forEach(node -> {
        if (node.left != null) next.add(node.left);
        if (node.right != null) next.add(node.right);
      });
    }
    if (levels.get(levels.size() - 1).isEmpty()) levels.remove(levels.size() - 1);
    return levels.stream()
      .map(level -> level.get(level.size() - 1).val)
      .collect(Collectors.toList());
  }
}