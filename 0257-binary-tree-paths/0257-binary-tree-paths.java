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
  public List<String> binaryTreePaths(TreeNode root) {
    List<String> ans = new ArrayList<String>();
    if (root.left == null && root.right == null) {
      ans.add(String.valueOf(root.val));
    } else {
      if (root.left != null) {
        List<String> leftPaths = binaryTreePaths(root.left).stream()
          .map(path -> String.valueOf(root.val) + "->" + path)
          .collect(Collectors.toList());
        ans.addAll(leftPaths);
      }
      if (root.right != null) {
        List<String> rightPaths = binaryTreePaths(root.right).stream()
          .map(path -> String.valueOf(root.val) + "->" + path)
          .collect(Collectors.toList());
        ans.addAll(rightPaths);
      }
    }
    return ans;
  }
}