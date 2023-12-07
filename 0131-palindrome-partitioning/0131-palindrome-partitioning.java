class Solution {
  public boolean isPali(String s, int l, int r) {
    while (l < r) {
      if (s.charAt(l) != s.charAt(r)) return false;
      l++;
      r--;
    }
    return true;
  }
  
  public void dfs(int i, String s, List<List<String>> ans, List<String> part) {
    if (i >= s.length()) {
      ans.add(new ArrayList<String>(part));
      return;
    }
    for (int j = i; j < s.length(); j++) {
      if (isPali(s, i, j)) {
        part.add(s.substring(i, j + 1));
        dfs(j + 1, s, ans, part);
        part.remove(part.size() - 1);
      }
    }
  }
  
  public List<List<String>> partition(String s) {
    List<List<String>> ans = new ArrayList();
    List<String> part = new ArrayList<String>();
    dfs(0, s, ans, part);
    return ans;
  }
}