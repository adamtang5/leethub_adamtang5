class Solution {
  public boolean valid(int o, int c) {
    return c >= o && o >= 0 && c >= 0;
  }
  
  public List<String> dfs(int o, int c, Map dp) {
    String key = String.valueOf(o) + "," + String.valueOf(c);
    if (dp.containsKey(key)) return (List<String>) dp.get(key);
    
    List<String> ans = new ArrayList();
    if (valid(o - 1, c)) {
      List<String> extra = dfs(o - 1, c, dp).stream()
        .map(seq -> "(" + seq)
        .collect(Collectors.toList());
      ans.addAll(extra);
    }
    if (valid(o, c - 1)) {
      List<String> extra = dfs(o, c - 1, dp).stream()
        .map(seq -> ")" + seq)
        .collect(Collectors.toList());
      ans.addAll(extra);
    }
    dp.put(key, ans);
    return ans;
  }
  
  public List<String> generateParenthesis(int n) {
    Map dp = new HashMap();
    String key = "0,0";
    List<String> value1 = new ArrayList<String>();
    value1.add("");
    dp.put(key, value1);

    key = "0,1";
    List<String> value2 = new ArrayList<String>();
    value2.add(")");
    dp.put(key, value2);
    
    return dfs(n, n, dp);
  }
}