class Solution {
  public boolean charMatch(char ch1, char ch2) {
    return ch2 == '.' || ch2 == ch1;
  }
  
  public boolean dfs(String s, ArrayList<String> parsed, HashMap dp) {
    String key = s + "-" + parsed.toString();
    
    if (s.length() > 0 && parsed.size() == 0) {
      dp.put(key, false);
      return (boolean) dp.get(key);
    }
    if (s.length() == 0 && parsed.size() == 0) {
      dp.put(key, true);
      return (boolean) dp.get(key);
    }
    if (s.length() == 0 && parsed.size() > 0) {
      boolean ans = true;
      for (int i = 0; i < parsed.size(); i++) {
        if (parsed.get(i).length() != 2) {
          ans = false;
          break;
        }
      }
      dp.put(key, ans);
      return ans;
    }
    
    String first = parsed.get(0);
    parsed.remove(0);
    if (first.length() == 1) {
      boolean ans = charMatch(s.charAt(0), first.charAt(0)) && dfs(s.substring(1), parsed, dp);
      dp.put(key, ans);
      return ans;
    } else {
      if (!charMatch(s.charAt(0), first.charAt(0))) {
        boolean ans = dfs(s, parsed, dp);
        dp.put(key, ans);
        return ans;
      } else {
        if (dp.containsKey(key)) {
          return (boolean) dp.get(key);
        } else {
          int len = 1;
          while (len < s.length() && (first.charAt(0) == '.' || s.charAt(len) == s.charAt(0))) {
            len++;
          }
          boolean ans = false;
          for (int i = 0; i <= len; i++) {
            ArrayList<String> copy = new ArrayList<>(parsed);
            ans = ans || dfs(s.substring(i), copy, dp);
          }
          dp.put(key, ans);
          return ans;
        }
      }
    }
  }
  
  public boolean isMatch(String s, String p) {
    ArrayList<String> parsed = new ArrayList<String>();
    int i = 0;
    while (i < p.length()) {
      if (i + 1 < p.length() && p.charAt(i + 1) == '*') {
        parsed.add(p.substring(i, i + 2));
        i += 2;
      } else {
        parsed.add(p.substring(i, i + 1));
        i++;
      }
    }
    
    return dfs(s, parsed, new HashMap());
  }
}