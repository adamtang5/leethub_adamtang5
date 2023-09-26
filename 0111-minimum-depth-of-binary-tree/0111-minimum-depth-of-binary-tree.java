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
  public int minDepth(TreeNode root) {
    if (root == null) return 0;
    int ans = 1;
    List<List<TreeNode>> levels = new ArrayList();
    levels.add(new ArrayList<TreeNode>());
    List<TreeNode> initial = new ArrayList<TreeNode>();
    initial.add(root);
    levels.add(initial);
    while (true) {
      for (TreeNode node : levels.get(ans)) {
        if (node.left == null && node.right == null) return ans;
        if (ans + 1 >= levels.size()) levels.add(new ArrayList<TreeNode>());
        List<TreeNode> next = levels.get(ans + 1);
        if (node.left != null) next.add(node.left);
        if (node.right != null) next.add(node.right);
      }
      ans++;
    }
  }
}