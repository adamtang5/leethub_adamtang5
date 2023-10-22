/*
// Definition for a Node.
class Node {
  public int val;
  public Node left;
  public Node right;
  public Node next;

  public Node() {}
  
  public Node(int _val) {
    val = _val;
  }

  public Node(int _val, Node _left, Node _right, Node _next) {
    val = _val;
    left = _left;
    right = _right;
    next = _next;
  }
};
*/

class AuxNode {
  private int level;
  private Node node;
  
  public AuxNode(int level, Node node) {
    this.level = level;
    this.node = node;
  }
  
  public int getLevel() {
    return level;
  }
  
  public Node getNode() {
    return node;
  }
}

class Solution {
  public Node connect(Node root) {
    List<AuxNode> queue = new ArrayList<AuxNode>();
    if (root != null) queue.add(new AuxNode(0, root));
    List<List<Node>> levels = new ArrayList();
    while (!queue.isEmpty()) {
      AuxNode curr = queue.remove(0);
      int level = curr.getLevel();
      Node node = curr.getNode();
      if (level > levels.size() - 1) levels.add(new ArrayList<Node>());
      levels.get(level).add(node);
      if (node.left != null) queue.add(new AuxNode(level + 1, node.left));
      if (node.right != null) queue.add(new AuxNode(level + 1, node.right));
    }
    Node currNode;
    while (!levels.isEmpty()) {
      List<Node> currLevel = levels.remove(0);
      currNode = null;
      Node last;
      while (!currLevel.isEmpty()) {
        last = currLevel.remove(currLevel.size() - 1);
        last.next = currNode;
        currNode = last;
      }
    }
    return root;
  }
}