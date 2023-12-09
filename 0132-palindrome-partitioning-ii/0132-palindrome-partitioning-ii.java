class Solution {
  public boolean inbound(int i, String s) {
    return i >= 0 && i < s.length();
  }
  
  public int minCut(String s) {
    Map<Integer, Set<Integer>> adj = new HashMap();
    for (int i = 0; i < s.length(); i++) {
      for (int j = i; j < s.length() && j <= i + 1; j++) {
        int l = i;
        int r = j;
        while (inbound(l, s) && inbound(r, s) && s.charAt(l) == s.charAt(r)) {
          if (!adj.containsKey(l)) adj.put(l, new HashSet<Integer>());
          adj.get(l).add(r + 1);
          l--;
          r++;
        }
      }
    }
    
    List<List<Integer>> pathQ = new ArrayList();
    List<Integer> init = new ArrayList<Integer>();
    init.add(0);
    pathQ.add(init);
    Set<Integer> visited = new HashSet<Integer>();
    visited.add(0);
    List<Integer> currPath;
    int currNode;
    int ans = 0;
    while (!pathQ.isEmpty()) {
      currPath = pathQ.remove(0);
      currNode = currPath.get(currPath.size() - 1);
      if (currNode == s.length()) {
        ans = currPath.size() - 2;
        break;
      }
      for (int nb : adj.get(currNode)) {
        if (!visited.contains(nb)) {
          visited.add(nb);
          List<Integer> next = new ArrayList<Integer>(currPath);
          next.add(nb);
          pathQ.add(next);
        }
      }
    }
    
    return ans;
  }
}