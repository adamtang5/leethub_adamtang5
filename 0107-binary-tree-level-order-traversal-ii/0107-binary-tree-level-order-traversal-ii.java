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
  public List<List<Integer>> levelOrderBottom(TreeNode root) {
    List<AuxNode> queue = new ArrayList<AuxNode>();
    if (root != null) {
      AuxNode initial = new AuxNode(0, root);
      queue.add(initial);
    }
    List<List<Integer>> fw = new ArrayList();
    while (!queue.isEmpty()) {
      AuxNode curr = queue.remove(0);
      int level = curr.getLevel();
      TreeNode node = curr.getNode();
      if (level > fw.size() - 1) fw.add(new ArrayList<Integer>());
      List<Integer> currLevel = (List<Integer>) fw.get(level);
      currLevel.add(node.val);
      if (node.left != null) queue.add(new AuxNode(level + 1, node.left));
      if (node.right != null) queue.add(new AuxNode(level + 1, node.right));
    }
    Collections.reverse(fw);
    return fw;
  }
}