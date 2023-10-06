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
  public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
    List<List<Integer>> ans = new ArrayList();
    int runningSum = 0;
    List<TreeNode> stack1 = new ArrayList<TreeNode>();
    if (root != null) stack1.add(root);
    List<TreeNode> stack2 = new ArrayList<TreeNode>();
    TreeNode curr;
    while (!stack1.isEmpty()) {
      curr = stack1.remove(stack1.size() - 1);
      stack2.add(curr);
      runningSum += curr.val;
      if (curr.right != null) stack1.add(curr.right);
      if (curr.left != null) stack1.add(curr.left);
      if (stack2.get(stack2.size() - 1).left == null && stack2.get(stack2.size() - 1).right == null) {
        if (runningSum == targetSum) {
          List<Integer> seq = stack2.stream()
            .map(node -> node.val)
            .collect(Collectors.toList());
          ans.add(seq);
        }
        while (
          !stack1.isEmpty() && 
          !stack2.isEmpty() && 
          stack1.get(stack1.size() - 1) != stack2.get(stack2.size() - 1).right
        ) {
          curr = stack2.remove(stack2.size() - 1);
          runningSum -= curr.val;
        }
      }
    }
    return ans;
  }
}