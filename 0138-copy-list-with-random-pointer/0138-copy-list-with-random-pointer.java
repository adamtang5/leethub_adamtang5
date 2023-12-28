/*
// Definition for a Node.
class Node {
  int val;
  Node next;
  Node random;

  public Node(int val) {
    this.val = val;
    this.next = null;
    this.random = null;
  }
}
*/

class Solution {
  public Node copyRandomList(Node head) {
    if (head == null) return head;
    
    List<Node> orig = new ArrayList<Node>();
    Node curr = head;
    while (curr != null) {
      orig.add(curr);
      curr = curr.next;
    }
    int[] randoms = new int[orig.size()];
    for (int i = 0; i < orig.size(); i++) {
      randoms[i] = orig.indexOf(orig.get(i).random);
    }
    
    Node ans = new Node(head.val);
    List<Node> ansArr = new ArrayList<Node>();
    curr = ans;
    for (int i = 1; i < orig.size(); i++) {
      ansArr.add(curr);
      curr.next = new Node(orig.get(i).val);
      curr = curr.next;
    }
    ansArr.add(curr);
    
    for (int i = 0; i < randoms.length; i++) {
      if (randoms[i] >= 0) ansArr.get(i).random = ansArr.get(randoms[i]);
    }
    return ans;
  }
}