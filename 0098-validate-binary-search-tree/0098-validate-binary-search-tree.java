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
  private double lb;
  private double ub;
  private TreeNode node;
  
  public AuxNode(double lb, TreeNode node, double ub) {
    this.lb = lb;
    this.node = node;
    this.ub = ub;
  }
  
  public double getLb() {
    return lb;
  }
  
  public double getUb() {
    return ub;
  }
  
  public TreeNode getNode() {
    return node;
  }
}

class Solution {
  public boolean validNode(double lb, double val, double ub) {
    return val > lb && val < ub;
  }
  
  public boolean isValidBST(TreeNode root) {
    List<AuxNode> queue = new ArrayList<AuxNode>();
    AuxNode initial = new AuxNode(Double.NEGATIVE_INFINITY, root, Double.POSITIVE_INFINITY);
    queue.add(initial);
    
    while (!queue.isEmpty()) {
      AuxNode curr = queue.remove(0);
      double lb = curr.getLb();
      TreeNode node = curr.getNode();
      double val = (double) curr.getNode().val;
      double ub = curr.getUb();
      if (!validNode(lb, val, ub)) return false;
      AuxNode next;
      if (node.left != null) {
        next = new AuxNode(lb, node.left, val);
        queue.add(next);
      }
      if (node.right != null) {
        next = new AuxNode(val, node.right, ub);
        queue.add(next);
      }
    }
    return true;
  }
}