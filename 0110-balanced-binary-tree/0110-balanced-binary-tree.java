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
class AuxNode {
  private boolean isBal;
  private int height;
  
  public AuxNode(boolean isBal, int height) {
    this.isBal = isBal;
    this.height = height;
  }
  
  public boolean getIsBal() {
    return isBal;
  }
  
  public int getHeight() {
    return height;
  }
}

class Solution {
  public AuxNode dfs(TreeNode node) {
    if (node == null) return new AuxNode(true, 0);
    AuxNode left = dfs(node.left);
    AuxNode right = dfs(node.right);
    boolean lBal = left.getIsBal();
    boolean rBal = right.getIsBal();
    int lHt = left.getHeight();
    int rHt = right.getHeight();
    return new AuxNode(
      lBal && rBal && Math.abs(lHt - rHt) <= 1,
      Math.max(lHt, rHt) + 1
    );
  }
  
  public boolean isBalanced(TreeNode root) {
    return dfs(root).getIsBal();
  }
}