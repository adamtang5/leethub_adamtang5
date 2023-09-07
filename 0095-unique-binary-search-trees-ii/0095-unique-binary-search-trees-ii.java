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
  public void helper(int lb, int ub, Map dp) {
    List<TreeNode> trees = new ArrayList<TreeNode>();
    String key;
    if (lb == ub) {
      key = String.valueOf(lb) + "-" + String.valueOf(ub);
      if (!dp.containsKey(key)) {
        trees.add(new TreeNode(lb));
        dp.put(key, trees);
      }
    } else {
      for (int rootVal = lb; rootVal <= ub; rootVal++) {
        helper(lb, rootVal - 1, dp);
        helper(rootVal + 1, ub, dp);
        key = String.valueOf(lb) + "-" + String.valueOf(rootVal - 1);
        List<TreeNode> leftTrees = (List<TreeNode>) dp.get(key);
        key = String.valueOf(rootVal + 1) + "-" + String.valueOf(ub);
        List<TreeNode> rightTrees = (List<TreeNode>) dp.get(key);
        if (rootVal == ub) {
          for (TreeNode leftTree : leftTrees) {
            trees.add(new TreeNode(rootVal, leftTree, null));
          }
        } else if (rootVal == lb) {
          for (TreeNode rightTree : rightTrees) {
            trees.add(new TreeNode(rootVal, null, rightTree));
          }
        } else {
          for (TreeNode leftTree : leftTrees) {
            for (TreeNode rightTree: rightTrees) {
              trees.add(new TreeNode(rootVal, leftTree, rightTree));
            }
          }
        }
      }
      if (lb <= ub) {
        key = String.valueOf(lb) + "-" + String.valueOf(ub);
        if (!dp.containsKey(key)) dp.put(key, trees);
      }
    }
  }
  
  public List<TreeNode> generateTrees(int n) {
    Map<String, ArrayList<TreeNode>> dp = new HashMap<String, ArrayList<TreeNode>>();
    helper(1, n, dp);
    String key = "1-" + String.valueOf(n);
    return (List<TreeNode>) dp.get(key);
  }
}