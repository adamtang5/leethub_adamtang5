class Solution {
  public boolean dfs(String s1, String s2, Map<String, Boolean> dp) {
    String key = s1 + "-" + s2;
    boolean ans;
    if (dp.containsKey(key)) return dp.get(key);
    if (s1.length() == 1) {
      ans = s1.equals(s2);
      dp.put(key, ans);
      return ans;
    }
    int[] tally1 = new int[26];
    int[] tally2 = new int[26];
    for (int i = 0; i < 26; i++) {
      tally1[i] = 0;
      tally2[i] = 0;
    }
    for (int i = 0; i < s1.length(); i++) {
      tally1[(int) s1.charAt(i) - (int) 'a']++;
      tally2[(int) s2.charAt(i) - (int) 'a']++;
    }
    String t1s = Arrays.toString(tally1);
    String t2s = Arrays.toString(tally2);
    if (!t1s.equals(t2s)) {
      dp.put(key, false);
      return false;
    }
    
    ans = false;
    for (int split = 1; split < s1.length(); split++) {
      ans = ans || dfs(s1.substring(0, split), s2.substring(0, split), dp) &&
        dfs(s1.substring(split), s2.substring(split), dp);
      ans = ans || dfs(s1.substring(0, split), s2.substring(s2.length() - split), dp) &&
        dfs(s1.substring(split), s2.substring(0, s2.length() - split), dp);
    }
    dp.put(key, ans);
    return ans;
  }
  
  public boolean isScramble(String s1, String s2) {
    Map<String, Boolean> dp = new HashMap<String, Boolean>();
    boolean ans = dfs(s1, s2, dp);
    // System.out.println(dp.keySet().stream()
    //   .map(key -> key + "=" + dp.get(key))
    //   .collect(Collectors.joining(", ", "{", "}")));
    return dfs(s1, s2, dp);
  }
}