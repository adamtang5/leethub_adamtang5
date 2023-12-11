/*
// Definition for a Node.
class Node {
  public int val;
  public List<Node> neighbors;
  public Node() {
    val = 0;
    neighbors = new ArrayList<Node>();
  }
  public Node(int _val) {
    val = _val;
    neighbors = new ArrayList<Node>();
  }
  public Node(int _val, ArrayList<Node> _neighbors) {
    val = _val;
    neighbors = _neighbors;
  }
}
*/

class Solution {
  public void dfs(Node node, Map<Integer, Node> newGraph, Set<Integer> visited) {
    visited.add(node.val);
    if (!newGraph.containsKey(node.val)) newGraph.put(node.val, new Node(node.val));
    for (Node nb : node.neighbors) {
      if (!newGraph.containsKey(nb.val)) newGraph.put(nb.val, new Node(nb.val));
      if (!newGraph.get(node.val).neighbors.contains(newGraph.get(nb.val))) {
        newGraph.get(node.val).neighbors.add(newGraph.get(nb.val));
      }
      if (!visited.contains(nb.val)) dfs(nb, newGraph, visited);
    }
  }
  
  public Node cloneGraph(Node node) {
    Map<Integer, Node> newGraph = new HashMap();
    if (node == null) return null;
    Set<Integer> visited = new HashSet<Integer>();
    dfs(node, newGraph, visited);
    return newGraph.get(1);
  }
}