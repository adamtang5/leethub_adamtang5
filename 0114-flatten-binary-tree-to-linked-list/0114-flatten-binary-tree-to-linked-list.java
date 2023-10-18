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
  public void flatten(TreeNode root) {
    List<TreeNode> stack = new ArrayList<TreeNode>();
    TreeNode ans = new TreeNode();
    if (root != null) stack.add(root);
    TreeNode curr;
    TreeNode resCurr = ans;
    while (!stack.isEmpty()) {
      curr = stack.remove(stack.size() - 1);
      resCurr.left = null;
      resCurr.right = curr;
      resCurr = resCurr.right;
      if (curr.right != null) stack.add(curr.right);
      if (curr.left != null) stack.add(curr.left);
    }
  }
}