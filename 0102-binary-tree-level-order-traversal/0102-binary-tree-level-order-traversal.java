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
  private int level;
  private TreeNode node;
  
  public AuxNode(int level, TreeNode node) {
    this.level = level;
    this.node = node;
  }
  
  public int getLevel() {
    return level;
  }
  
  public TreeNode getNode() {
    return node;
  }
}

class Solution {
  public List<List<Integer>> levelOrder(TreeNode root) {
    List<AuxNode> queue = new ArrayList();
    if (root != null) {
      AuxNode initial = new AuxNode(0, root);
      queue.add(initial);
    }
    List<List<Integer>> ans = new ArrayList();
    
    while (!queue.isEmpty()) {
      AuxNode curr = queue.remove(0);
      int level = curr.getLevel();
      TreeNode node = curr.getNode();
      if (level > ans.size() - 1) ans.add(new ArrayList<Integer>());
      List<Integer> currLevel = (List<Integer>) ans.get(level);
      currLevel.add(node.val);
      if (node.left != null) queue.add(new AuxNode(level + 1, node.left));
      if (node.right != null) queue.add(new AuxNode(level + 1, node.right));
    }
    return ans;
  }
}