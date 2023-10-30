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
  public List<Integer> postorderTraversal(TreeNode root) {
    List<Integer> ans = new ArrayList<Integer>();
    List<TreeNode> stack = new ArrayList<TreeNode>();
    if (root != null) stack.add(root);
    TreeNode popped;
    while (!stack.isEmpty()) {
      popped = stack.remove(stack.size() - 1);
      ans.add(0, popped.val);
      if (popped.left != null) stack.add(popped.left);
      if (popped.right != null) stack.add(popped.right);
    }
    return ans;
  }
}