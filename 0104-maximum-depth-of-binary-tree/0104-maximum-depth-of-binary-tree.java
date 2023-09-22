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
  public int maxDepth(TreeNode root) {
    if (root == null) return 0;
    int depth = 0;
    List<List<TreeNode>> levels = new ArrayList();
    List<TreeNode> initial = new ArrayList<TreeNode>();
    initial.add(root);
    levels.add(initial);
    while (!((List<TreeNode>) levels.get(depth)).isEmpty()) {
      if (levels.size() < depth + 2) levels.add(new ArrayList<TreeNode>());
      List<TreeNode> curr = (List<TreeNode>) levels.get(depth);
      List<TreeNode> next = (List<TreeNode>) levels.get(depth + 1);
      curr.stream()
        .forEach(node -> {
          if (node.left != null) next.add(node.left);
          if (node.right != null) next.add(node.right);
        });
      depth++;
    }
    return depth;
  }
}