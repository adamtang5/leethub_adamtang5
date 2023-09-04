class Solution {
  public boolean validOctet(String s) {
    if (s.length() > 3 || s.length() < 1) return false;
    if (s.length() > 1 && s.substring(0, 1).equals("0")) return false;
    if (Integer.valueOf(s) > 255) return false;
    return true;
  }
  
  public void dfs(String s, int octIdx, String addr, List<String> ans) {
    if (s.length() == 0) return;
    if (s.length() > (octIdx + 1) * 3) return;
    if (octIdx == 0 && !validOctet(s)) return;
    if (validOctet(s) && octIdx == 0) {
      ans.add(s + addr);
      return;
    }
    for (int digits = 1; digits <= Math.min(s.length(), 3); digits++) {
      String oct = s.substring(s.length() - digits);
      if (validOctet(oct)) {
        dfs(s.substring(0, s.length() - digits), octIdx - 1, "." + oct + addr, ans);
      }
    }
  }
  
  public List<String> restoreIpAddresses(String s) {
    List<String> ans = new ArrayList<String>();
    if (s.length() < 4 || s.length() > 12) return ans;
    if (s.length() == 4) {
      String addr = "";
      for (int i = 0; i < s.length(); i++) {
        addr += s.substring(i, i + 1);
        if (i < s.length() - 1) addr += ".";
      }
      ans.add(addr);
      return ans;
    }
    
    dfs(s, 3, "", ans);
    return ans;
  }
}