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
class Solution {
  public boolean isLeaf(Node node) {
    return node.left == null && node.right == null;
  }
  
  public Node nextChild(Node node) {
    return node == null ? null : node.left != null ? node.left : node.right;
  }
  
  public Node lastChild(Node node) {
    return node == null ? null : node.right != null ? node.right : node.left;
  }
  
  public Node connect(Node root) {
    Node thisCur = root;
    Node thisNxt = null;
    Node nxtLvl = nextChild(root);
    while (thisCur != null && nxtLvl != null) {
      if (thisCur.left != null && thisCur.right != null) thisCur.left.next = thisCur.right;
      if (lastChild(thisCur) != null && thisNxt != null) {
        while (thisNxt != null && isLeaf(thisNxt)) thisNxt = thisNxt.next;
        lastChild(thisCur).next = nextChild(thisNxt);
      }
      thisCur = thisNxt;
      if (thisNxt != null) thisNxt = thisNxt.next;
      if (thisCur == null) {
        thisCur = nxtLvl;
        thisNxt = thisCur;
        while (thisNxt != null && isLeaf(thisNxt)) thisNxt = thisNxt.next;
        nxtLvl = thisNxt == null || isLeaf(thisNxt) ? null : nextChild(thisNxt);
        thisNxt = thisCur.next;
      }
    }
    return root;
  }
}